import { Category } from '.prisma/client';
import httpStatus from 'http-status';
import { paginationOptionFields } from '../../../common/paginationOptions';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { categoryFilterFields } from './category.constant';
import { CategoryService } from './category.service';

const create = catchAsync(async (req, res) => {
  const result = await CategoryService.create(req.body);

  sendResponse<Category>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Category created Successfully',
    data: result,
  });
});

const getAll = catchAsync(async (req, res) => {
  // pick only filter fields from query params
  const filters = pick(req.query, categoryFilterFields);
  // pick only pagination fields from query params
  const paginationOptions = pick(req.query, paginationOptionFields);

  const result = await CategoryService.getAll(filters, paginationOptions);

  sendResponse<Category[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Fetched all categories',
    data: result.data,
    meta: result.meta,
  });
});

const getSingle = catchAsync(async (req, res) => {
  const result = await CategoryService.getSingle(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.FOUND,
    success: true,
    message: 'Successfully Retrieve Category Information',
    data: result,
  });
});

const deleteOne = catchAsync(async (req, res) => {
  const result = await CategoryService.deleteOne(req.params.id);

  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Delete a Category ',
    data: result,
  });
});

const updateOne = catchAsync(async (req, res) => {
  const result = await CategoryService.updateOne(req.params.id, req.body);

  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Update Category data',
    data: result,
  });
});

export const CategoryController = {
  create,
  getAll,
  getSingle,
  deleteOne,
  updateOne,
};
