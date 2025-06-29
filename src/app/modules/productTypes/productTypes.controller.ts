import { NextFunction, Request, Response } from 'express';
import { ProductType } from './productTypes.model';
// get all ProductTypeRoutes

const getAllProductTypes = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Fetch all product types from the database
    const { target } = req.query;


    const query: Record<string, any> = {};
    if (target) {
      query.category = target;
    }

    const productTypes = await ProductType.find(query);

    res.status(200).json({
      success: true,
      message: 'Product types fetched successfully',
      data: productTypes,
    });
  } catch (error) {
    if (error instanceof Error) {
      error.message = 'Failed to fetch product types';
    }
    next(error);
  }
};

export const ProductTypeController = {
  getAllProductTypes,
};
