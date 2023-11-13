import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './category.service';
import pick from '../../../shared/pick';
import { categoryFilterFields } from './category.constant';
import { paginationOptionFields } from '../../../common/paginationOptions';

const create = catchAsync(async (req, res) => {
  const result = await CategoryService.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully created category',
    data: result,
  });
});

const getAll = catchAsync(async (req, res) => {
  const filters = pick(req.query, categoryFilterFields);
  const paginationOptions = pick(req.query, paginationOptionFields);
  const result = await CategoryService.getAll(filters, paginationOptions);
  sendResponse(res, {
    statusCode: httpStatus.FOUND,
    success: true,
    message: 'Successfully Get all categories',
    data: result.data,
    meta: result.meta,
  });
});

const getSingle = catchAsync(async (req, res) => {
  const result = await CategoryService.getSingle(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.FOUND,
    success: true,
    message: `${
      result ? 'Successfully Get single Category info' : 'No data found'
    } `,
    data: result,
  });
});

const deleteOne = catchAsync(async (req, res) => {
  const result = await CategoryService.deleteOne(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Delete a Category ',
    data: result,
  });
});

const updateOne = catchAsync(async (req, res) => {
  const result = await CategoryService.updateOne(req.params.id, req.body);
  sendResponse(res, {
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
