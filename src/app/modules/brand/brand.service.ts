/* eslint-disable @typescript-eslint/no-explicit-any */
import { Brand } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { brandSearchFields } from './brand.constant';
import { IBrandFilter } from './brand.interface';

const create = async (payload: Brand): Promise<Brand> => {
  // check if brand already exists
  const brand = await prisma.brand.findUnique({
    where: {
      name: payload.name,
    },
  });
  if (brand) {
    throw new ApiError(httpStatus.CONFLICT, 'Brand already exists');
  }

  // create new brand
  const result = await prisma.brand.create({
    data: payload,
  });

  return result;
};

const getAll = async (
  filters: IBrandFilter,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<Brand[]>> => {
  const { searchTerm, ...filterData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  // sorting

  let orderBy = {};
  if (sortBy && sortOrder) {
    orderBy = {
      [sortBy]: sortOrder,
    };
  } else {
    orderBy = {
      createdAt: 'desc',
    };
  }
  const andConditions = [];

  // searching;

  if (searchTerm) {
    andConditions.push({
      OR: brandSearchFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  //filtering
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          equals: (filterData as any)[key],
          mode: 'insensitive',
        },
      })),
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // get data according to pagination and filtering
  const result = await prisma.brand.findMany({
    where: whereConditions,
    orderBy,
    skip,
    take: limit,
    include: {
      products: true,
    },
  });

  // get total count of data
  const total = await prisma.brand.count({
    where: whereConditions,
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingle = async (id: string): Promise<Brand> => {
  const result = await prisma.brand.findUnique({
    where: {
      id,
    },
    include: {
      products: true,
    },
  });

  // check if brand exists
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Brand not found');
  }

  return result;
};

const deleteOne = async (id: string): Promise<Brand> => {
  // initiate transaction to delete brand and all products with this brand
  return await prisma.$transaction(async transactionClient => {
    // delete all product with this brand
    await transactionClient.product.deleteMany({
      where: {
        brandId: id,
      },
    });

    // delete brand
    const result = await transactionClient.brand.delete({
      where: {
        id,
      },
    });

    return result;
  });
};

const updateOne = async (
  id: string,
  data: Partial<Brand>,
): Promise<Brand | null> => {
  const result = await prisma.brand.update({
    where: {
      id,
    },
    data,
  });

  return result;
};

export const BrandService = {
  create,
  getAll,
  getSingle,
  deleteOne,
  updateOne,
};
