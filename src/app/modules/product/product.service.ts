/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import {
  productRelationalFields,
  productRelationalFieldsMapper,
  productSearchFields,
} from './product.constant';
import { IProductFilter } from './product.interface';

const create = async (payload: Product): Promise<Product> => {
  // check if product already exists
  const existingProduct = await prisma.product.findFirst({
    where: {
      name: payload.name,
    },
  });
  if (existingProduct) {
    throw new ApiError(httpStatus.CONFLICT, 'Product already exists');
  }

  // create new product
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
  } else {
    orderBy = {
      createdAt: 'desc',
    };
  }

  // prepare and conditions
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
      AND: Object.keys(filterData).map(key => {
        if (productRelationalFields.includes(key)) {
          return {
            [productRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key],
              mode: 'insensitive',
            },
          };
        }
      }),
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // get data according to filters and pagination options
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

  // get total count of data
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

const getSingle = async (id: string): Promise<Product> => {
  const result = await prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      brand: true,
      category: true,
    },
  });

  // check if product exists
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }

  return result;
};

const deleteOne = async (id: string): Promise<Product> => {
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
): Promise<Product> => {
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
