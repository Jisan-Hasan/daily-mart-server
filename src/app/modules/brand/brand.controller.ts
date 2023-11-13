import { Brand } from '@prisma/client';
import httpStatus from 'http-status';
import { paginationOptionFields } from '../../../common/paginationOptions';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { brandFilterFields } from './brand.constant';
import { BrandService } from './brand.service';

const create = catchAsync(async (req, res) => {
  const result = await BrandService.create(req.body);

  sendResponse<Brand>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully created brand',
    data: result,
  });
});

const getAll = catchAsync(async (req, res) => {
  // pick only filter fields from req.query
  const filters = pick(req.query, brandFilterFields);
  // pick only pagination options from req.query
  const paginationOptions = pick(req.query, paginationOptionFields);

  const result = await BrandService.getAll(filters, paginationOptions);

  sendResponse<Brand[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Fetched all brand',
    data: result.data,
    meta: result.meta,
  });
});

const getSingle = catchAsync(async (req, res) => {
  const result = await BrandService.getSingle(req.params.id);

  sendResponse<Brand>(res, {
    statusCode: httpStatus.FOUND,
    success: true,
    message: 'Retrieve brand data',
    data: result,
  });
});

const deleteOne = catchAsync(async (req, res) => {
  const result = await BrandService.deleteOne(req.params.id);

  sendResponse<Brand>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Deleted the Brand ',
    data: result,
  });
});

const updateOne = catchAsync(async (req, res) => {
  const result = await BrandService.updateOne(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Update Brand data',
    data: result,
  });
});

export const BrandController = {
  create,
  getAll,
  getSingle,
  deleteOne,
  updateOne,
};
