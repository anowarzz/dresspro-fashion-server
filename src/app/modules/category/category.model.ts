import { Schema, model } from 'mongoose';
import { ICategory } from './category.interface';

const categorySchema = new Schema<ICategory>(
  {
    categoryId: {
      type: Number,
      required: [true, 'Category ID is required'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Category name is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Category slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    heroTitle: {
      type: String,
      required: [true, 'Category hero title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Category description is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Category = model<ICategory>('Category', categorySchema);
