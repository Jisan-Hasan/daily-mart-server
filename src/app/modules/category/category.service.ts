/* eslint-disable @typescript-eslint/no-explicit-any */
import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { ICategoryFilter } from './category.interface';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IGenericResponse } from '../../../interfaces/common';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { categorySearchFields } from './category.constant';

const create = async (payload: Category): Promise<Category> => {
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
  }
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
        },
      })),
    });
  }
  const whereConditions =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.category.findMany({
    where: whereConditions,
    orderBy,
    skip,
    take: limit,
    include: {
      products: true,
    },
  });
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

const getSingle = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      products: true,
    },
  });
  return result;
};

const deleteOne = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
  });
  return result;
};

const updateOne = async (
  id: string,
  data: Partial<Category>,
): Promise<Category | null> => {
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
