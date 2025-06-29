import { z } from 'zod';

export const productSchema = z.object({
  product_id: z
    .string({ required_error: 'Product ID is required' })
    .min(1, 'Product ID cannot be empty'),
  title: z
    .string({ required_error: 'Product title is required' })
    .min(1, 'Product title cannot be empty'),
  description: z
    .string({ required_error: 'Product description is required' })
    .min(1, 'Product description cannot be empty'),
  price: z
    .number({ required_error: 'Product price is required' })
    .nonnegative('Product price must be a non-negative number'),
  brand: z
    .string({ required_error: 'Product brand is required' })
    .min(1, 'Product brand cannot be empty'),
  category_id: z
    .number({ required_error: 'Category ID is required' })
    .int('Category ID must be an integer')
    .positive('Category ID must be positive'),
  color: z
    .array(z.string().min(1, 'Color cannot be empty'), {
      required_error: 'At least one color is required',
    })
    .min(1, 'At least one color is required'),
  size: z
    .array(z.string().min(1, 'Size cannot be empty'), {
      required_error: 'At least one size is required',
    })
    .min(1, 'At least one size is required'),
  quantity: z
    .number({ required_error: 'Product quantity is required' })
    .int('Quantity must be an integer')
    .nonnegative('Quantity must be non-negative'),
  fashionCategory: z
    .string({ required_error: 'Fashion category is required' })
    .min(1, 'Fashion category cannot be empty'),
  imageUrl: z
    .string({ required_error: 'Image URL is required' })
    .url('Image URL must be a valid URL'),
  thumbnails: z
    .array(z.string().url('Thumbnail must be a valid URL'))
    .optional(),
});

export type ProductInput = z.infer<typeof productSchema>;
