/* eslint-disable @typescript-eslint/no-explicit-any */
import { Category } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { categorySearchFields } from './category.constant';
import { ICategoryFilter } from './category.interface';

const create = async (payload: Category): Promise<Category> => {
  // check if category already exists
  const category = await prisma.category.findFirst({
    where: {
      title: payload.title,
    },
  });
  if (category) {
    throw new ApiError(httpStatus.CONFLICT, 'Category already exists');
  }

  // create category
  const result = await prisma.category.create({
    data: payload,
  });

  return result;
};

const getAll = async (
  filters: ICategoryFilter,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<Category[]>> => {
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

  // searching;
  if (searchTerm) {
    andConditions.push({
      OR: categorySearchFields.map(field => ({
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

  // get data according to filters and pagination options
  const result = await prisma.category.findMany({
    where: whereConditions,
    orderBy,
    skip,
    take: limit,
    include: {
      products: true,
    },
  });

  // get total count of data
  const total = await prisma.category.count({
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

const getSingle = async (id: string): Promise<Category> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      products: true,
    },
  });

  // check if category exists
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }

  return result;
};

const deleteOne = async (id: string): Promise<Category> => {
  const result = await prisma.$transaction(async transactionClient => {
    // delete all products of this category
    await transactionClient.product.deleteMany({
      where: {
        categoryId: id,
      },
    });

    // delete category and return result
    return await transactionClient.category.delete({
      where: {
        id,
      },
    });
  });

  return result;
};

const updateOne = async (
  id: string,
  data: Partial<Category>,
): Promise<Category> => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data,
  });

  return result;
};

export const CategoryService = {
  create,
  getAll,
  getSingle,
  deleteOne,
  updateOne,
};
