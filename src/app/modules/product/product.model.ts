import mongoose, { Schema } from 'mongoose';
import { IProduct } from './product.interface';

const ProductSchema: Schema = new Schema<IProduct>({
  product_id: {
    type: String,
    required: [true, 'Product ID is required'],
    unique: true,
  },
  title: { type: String, required: [true, 'Product title is required'] },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: { type: Number, required: [true, 'Product price is required'] },
  brand: { type: String, required: [true, 'Product brand is required'] },
  category_id: { type: Number, required: [true, 'Category ID is required'] },
  color: { type: [String], required: [true, 'At least one color is required'] },
  size: { type: [String], required: [true, 'At least one size is required'] },
  quantity: { type: Number, required: [true, 'Product quantity is required'] },
  fashionCategory: {
    type: String,
    required: [true, 'Fashion category is required'],
  },
  imageUrl: { type: String, required: [true, 'Image URL is required'] },
  thumbnails: {
    type: [String],
    required: false,
  },
});

export default mongoose.model<IProduct>('Product', ProductSchema);
