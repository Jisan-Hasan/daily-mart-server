/* eslint-disable @typescript-eslint/no-explicit-any */
import { Brand } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IBrandFilter } from './brand.interface';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IGenericResponse } from '../../../interfaces/common';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { brandSearchFields } from './brand.constant';

const create = async (payload: Brand): Promise<Brand> => {
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
        },
      })),
    });
  }
  const whereConditions =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.brand.findMany({
    where: whereConditions,
    orderBy,
    skip,
    take: limit,
    include: {
      products: true,
    },
  });
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

const getSingle = async (id: string): Promise<Brand | null> => {
  const result = await prisma.brand.findUnique({
    where: {
      id,
    },
    include: {
      products: true,
    },
  });
  return result;
};

const deleteOne = async (id: string): Promise<Brand | null> => {
  const result = await prisma.brand.delete({
    where: {
      id,
    },
  });
  return result;
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
