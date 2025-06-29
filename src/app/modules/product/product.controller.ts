import { NextFunction, Request, Response } from 'express';
import Product from './product.model';

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: products,
    });
  } catch (error) {
    if (error instanceof Error) {
      error.message = 'Failed to fetch products';
    }
    next(error);
  }
};

export const ProductController = {
  getAllProducts,
};
