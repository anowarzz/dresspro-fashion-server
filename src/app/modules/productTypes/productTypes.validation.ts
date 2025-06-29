import { z } from 'zod';

const createProductTypeValidationSchema = z.object({
  body: z.object({
    productTypeId: z
      .number({
        required_error: 'Product type ID is required',
        invalid_type_error: 'Product type ID must be a number',
      })
      .int({ message: 'Product type ID must be an integer' })
      .positive({ message: 'Product type ID must be a positive number' }),

    name: z
      .string({
        required_error: 'Product type name is required',
        invalid_type_error: 'Product type name must be a string',
      })
      .min(1, { message: 'Product type name cannot be empty' })
      .max(250, { message: 'Product type name cannot exceed 250 characters' })
      .trim(),

    slug: z
      .string({
        required_error: 'Product type slug is required',
        invalid_type_error: 'Product type slug must be a string',
      })
      .min(1, { message: 'Product type slug cannot be empty' })
      .max(100, { message: 'Product type slug cannot exceed 100 characters' })
      .regex(/^[a-z0-9-]+$/, {
        message:
          'Product type slug must contain only lowercase letters, numbers, and hyphens',
      })
      .trim(),

    description: z
      .string({
        required_error: 'Product type description is required',
        invalid_type_error: 'Product type description must be a string',
      })
      .min(1, { message: 'Product type description cannot be empty' })
      .trim(),

    imageUrl: z
      .string({
        required_error: 'Product type image URL is required',
        invalid_type_error: 'Product type image URL must be a string',
      })
      .min(1, { message: 'Product type image URL cannot be empty' })
      .url({ message: 'Product type image URL must be a valid URL' })
      .trim(),

    category: z
      .string({
        required_error: 'Product type category is required',
        invalid_type_error: 'Product type category must be a string',
      })
      .min(1, { message: 'Product type category cannot be empty' })
      .max(250, {
        message: 'Product type category cannot exceed 250 characters',
      })
      .trim()
      .toLowerCase(),

    inStock: z.boolean({
      required_error: 'Product type stock status is required',
      invalid_type_error: 'Product type stock status must be a boolean',
    }),

    featured: z
      .boolean({
        invalid_type_error: 'Product type featured status must be a boolean',
      })
      .optional(),
  }),
});

const updateProductTypeValidationSchema = z.object({
  body: z.object({
    productTypeId: z
      .number({
        invalid_type_error: 'Product type ID must be a number',
      })
      .int({ message: 'Product type ID must be an integer' })
      .positive({ message: 'Product type ID must be a positive number' })
      .optional(),

    name: z
      .string({
        invalid_type_error: 'Product type name must be a string',
      })
      .min(1, { message: 'Product type name cannot be empty' })
      .max(250, { message: 'Product type name cannot exceed 250 characters' })
      .trim()
      .optional(),

    slug: z
      .string({
        invalid_type_error: 'Product type slug must be a string',
      })
      .min(1, { message: 'Product type slug cannot be empty' })
      .max(100, { message: 'Product type slug cannot exceed 100 characters' })
      .regex(/^[a-z0-9-]+$/, {
        message:
          'Product type slug must contain only lowercase letters, numbers, and hyphens',
      })
      .trim()
      .optional(),

    description: z
      .string({
        invalid_type_error: 'Product type description must be a string',
      })
      .min(1, { message: 'Product type description cannot be empty' })
      .trim()
      .optional(),

    imageUrl: z
      .string({
        invalid_type_error: 'Product type image URL must be a string',
      })
      .min(1, { message: 'Product type image URL cannot be empty' })
      .url({ message: 'Product type image URL must be a valid URL' })
      .trim()
      .optional(),

    category: z
      .string({
        invalid_type_error: 'Product type category must be a string',
      })
      .min(1, { message: 'Product type category cannot be empty' })
      .max(250, {
        message: 'Product type category cannot exceed 250 characters',
      })
      .trim()
      .toLowerCase()
      .optional(),

    inStock: z
      .boolean({
        invalid_type_error: 'Product type stock status must be a boolean',
      })
      .optional(),

    featured: z
      .boolean({
        invalid_type_error: 'Product type featured status must be a boolean',
      })
      .optional(),
  }),
});

export const ProductTypeValidation = {
  createProductTypeValidationSchema,
  updateProductTypeValidationSchema,
};
