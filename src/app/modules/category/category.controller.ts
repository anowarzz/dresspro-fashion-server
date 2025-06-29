// get all Category from database

import { NextFunction, Request, Response } from 'express';
import { Category } from './category.model';

const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      message: 'Categories fetched successfully',
      data: categories,
    });
  } catch (error) {
    if (error instanceof Error) {
      error.message = 'Failed to fetch categories';
    }
    next(error);
  }
};

export const CategoryController = {
  getAllCategories,
};
