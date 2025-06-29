export interface IProduct {
  product_id: string;
  title: string;
  description: string;
  price: number;
  brand: string;
  category_id: number;
  color: string[];
  size: string[];
  quantity: number;
  fashionCategory: string;
  imageUrl: string;
  thumbnails?: string[];
}

export interface IProductCollection {
  items: IProduct[];
}

export interface IProductResponse {
  products: IProductCollection;
}
