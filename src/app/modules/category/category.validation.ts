import { z } from 'zod';

const createCategoryValidationSchema = z.object({
  body: z.object({
    categoryId: z
      .number({
        required_error: 'Category ID is required',
        invalid_type_error: 'Category ID must be a number',
      })
      .int({ message: 'Category ID must be an integer' })
      .positive({ message: 'Category ID must be a positive number' }),

    name: z
      .string({
        required_error: 'Category name is required',
        invalid_type_error: 'Category name must be a string',
      })
      .min(1, { message: 'Category name cannot be empty' })
      .max(250, { message: 'Category name cannot exceed 250 characters' })
      .trim(),

    slug: z
      .string({
        required_error: 'Category slug is required',
        invalid_type_error: 'Category slug must be a string',
      })
      .min(1, { message: 'Category slug cannot be empty' })
      .max(100, { message: 'Category slug cannot exceed 100 characters' })
      .regex(/^[a-z0-9-]+$/, {
        message:
          'Category slug must contain only lowercase letters, numbers, and hyphens',
      })
      .trim(),

    heroTitle: z
      .string({
        required_error: 'Category hero title is required',
        invalid_type_error: 'Category hero title must be a string',
      })
      .min(1, { message: 'Category hero title cannot be empty' })
      .max(250, { message: 'Category hero title cannot exceed 250 characters' })
      .trim(),

    description: z
      .string({
        required_error: 'Category description is required',
        invalid_type_error: 'Category description must be a string',
      })
      .min(1, { message: 'Category description cannot be empty' })
      .trim(),
  }),
});

const updateCategoryValidationSchema = z.object({
  body: z.object({
    categoryId: z
      .number({
        invalid_type_error: 'Category ID must be a number',
      })
      .int({ message: 'Category ID must be an integer' })
      .positive({ message: 'Category ID must be a positive number' })
      .optional(),

    name: z
      .string({
        invalid_type_error: 'Category name must be a string',
      })
      .min(1, { message: 'Category name cannot be empty' })
      .max(250, { message: 'Category name cannot exceed 250 characters' })
      .trim()
      .optional(),

    slug: z
      .string({
        invalid_type_error: 'Category slug must be a string',
      })
      .min(1, { message: 'Category slug cannot be empty' })
      .max(100, { message: 'Category slug cannot exceed 100 characters' })
      .regex(/^[a-z0-9-]+$/, {
        message:
          'Category slug must contain only lowercase letters, numbers, and hyphens',
      })
      .trim()
      .optional(),

    heroTitle: z
      .string({
        invalid_type_error: 'Category hero title must be a string',
      })
      .min(1, { message: 'Category hero title cannot be empty' })
      .max(250, { message: 'Category hero title cannot exceed 250 characters' })
      .trim()
      .optional(),

    description: z
      .string({
        invalid_type_error: 'Category description must be a string',
      })
      .min(1, { message: 'Category description cannot be empty' })
      .trim()
      .optional(),
  }),
});

export const CategoryValidation = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};
