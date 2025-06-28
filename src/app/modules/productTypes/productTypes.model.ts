import { Schema, model } from 'mongoose';
import { IProductType } from './productTypes.interface';

const productTypeSchema = new Schema<IProductType>(
  {
    productTypeId: {
      type: Number,
      required: [true, 'Product type ID is required'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Product type name is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Product type slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Product type description is required'],
      trim: true,
    },
    imageUrl: {
      type: String,
      required: [true, 'Product type image URL is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Product type category is required'],
      lowercase: true,
      trim: true,
    },
    inStock: {
      type: Boolean,
      required: [true, 'Product type stock status is required'],
      default: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ProductType = model<IProductType>(
  'ProductType',
  productTypeSchema,
);
