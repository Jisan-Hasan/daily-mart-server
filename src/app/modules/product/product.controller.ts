import { Product } from '@prisma/client';
import httpStatus from 'http-status';
import { paginationOptionFields } from '../../../common/paginationOptions';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { productFilterFields } from './product.constant';
import { ProductService } from './product.service';

const create = catchAsync(async (req, res) => {
  const result = await ProductService.create(req.body);

  sendResponse<Product>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Product created successfully',
    data: result,
  });
});

const getAll = catchAsync(async (req, res) => {
  // pick only filter fields from query params
  const filters = pick(req.query, productFilterFields);
  // pick only pagination fields from query params
  const paginationOptions = pick(req.query, paginationOptionFields);

  const result = await ProductService.getAll(filters, paginationOptions);

  sendResponse<Product[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products fetched successfully',
    data: result.data,
    meta: result.meta,
  });
});

const getSingle = catchAsync(async (req, res) => {
  const result = await ProductService.getSingle(req.params.id);

  sendResponse<Product>(res, {
    statusCode: httpStatus.FOUND,
    success: true,
    message: 'Product retrieved successfully',
    data: result,
  });
});

const deleteOne = catchAsync(async (req, res) => {
  const result = await ProductService.deleteOne(req.params.id);

  sendResponse<Product>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Delete a Product ',
    data: result,
  });
});

const updateOne = catchAsync(async (req, res) => {
  const result = await ProductService.updateOne(req.params.id, req.body);

  sendResponse<Product>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Update Product data',
    data: result,
  });
});

export const ProductController = {
  create,
  getAll,
  getSingle,
  deleteOne,
  updateOne,
};
