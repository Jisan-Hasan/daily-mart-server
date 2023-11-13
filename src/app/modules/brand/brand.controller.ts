import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BrandService } from './brand.service';
import pick from '../../../shared/pick';
import { brandFilterFields } from './brand.constant';
import { paginationOptionFields } from '../../../common/paginationOptions';

const create = catchAsync(async (req, res) => {
  const result = await BrandService.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully created brand',
    data: result,
  });
});

const getAll = catchAsync(async (req, res) => {
  const filters = pick(req.query, brandFilterFields);
  const paginationOptions = pick(req.query, paginationOptionFields);
  const result = await BrandService.getAll(filters, paginationOptions);
  sendResponse(res, {
    statusCode: httpStatus.FOUND,
    success: true,
    message: 'Successfully Get all brand',
    data: result.data,
    meta: result.meta,
  });
});

const getSingle = catchAsync(async (req, res) => {
  const result = await BrandService.getSingle(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.FOUND,
    success: true,
    message: `${
      result ? 'Successfully Get single Brand info' : 'No data found'
    } `,
    data: result,
  });
});

const deleteOne = catchAsync(async (req, res) => {
  const result = await BrandService.deleteOne(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Delete a Brand ',
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
