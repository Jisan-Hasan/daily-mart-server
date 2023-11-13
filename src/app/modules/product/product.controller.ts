import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ProductService } from './product.service';
import pick from '../../../shared/pick';
import { productFilterFields } from './product.constant';
import { paginationOptionFields } from '../../../common/paginationOptions';

const create = catchAsync(async (req, res) => {
  const result = await ProductService.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully created product',
    data: result,
  });
});

const getAll = catchAsync(async (req, res) => {
  const filters = pick(req.query, productFilterFields);
  const paginationOptions = pick(req.query, paginationOptionFields);
  const result = await ProductService.getAll(filters, paginationOptions);
  sendResponse(res, {
    statusCode: httpStatus.FOUND,
    success: true,
    message: 'Successfully Get all products',
    data: result.data,
    meta: result.meta,
  });
});

const getSingle = catchAsync(async (req, res) => {
  const result = await ProductService.getSingle(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.FOUND,
    success: true,
    message: `${
      result ? 'Successfully Get single Product info' : 'No data found'
    } `,
    data: result,
  });
});

const deleteOne = catchAsync(async (req, res) => {
  const result = await ProductService.deleteOne(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Delete a Product ',
    data: result,
  });
});

const updateOne = catchAsync(async (req, res) => {
  const result = await ProductService.updateOne(req.params.id, req.body);
  sendResponse(res, {
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
