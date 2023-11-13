/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IProductFilter } from './product.interface';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IGenericResponse } from '../../../interfaces/common';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { productSearchFields } from './product.constant';

const create = async (payload: Product): Promise<Product> => {
  const result = await prisma.product.create({
    data: payload,
  });
  return result;
};

const getAll = async (
  filters: IProductFilter,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<Product[]>> => {
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

  // searching
  if (searchTerm) {
    andConditions.push({
      OR: productSearchFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  // filtering
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

  const result = await prisma.product.findMany({
    where: whereConditions,
    orderBy,
    skip,
    take: limit,
    include: {
      brand: true,
      category: true,
    },
  });

  const total = await prisma.product.count({
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

const getSingle = async (id: string): Promise<Product | null> => {
  const result = await prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      brand: true,
      category: true,
    },
  });
  return result;
};

const deleteOne = async (id: string): Promise<Product | null> => {
  const result = await prisma.product.delete({
    where: {
      id,
    },
  });
  return result;
};

const updateOne = async (
  id: string,
  data: Partial<Product>,
): Promise<Product | null> => {
  const result = await prisma.product.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

export const ProductService = {
  create,
  getAll,
  getSingle,
  deleteOne,
  updateOne,
};
