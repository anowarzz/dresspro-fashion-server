export interface IProductType {
  productTypeId: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  category: string;
  inStock: boolean;
  featured: boolean;
}

export interface IProductTypeCollection {
  items: IProductType[];
}

export interface IProductTypeResponse {
  productTypes: IProductTypeCollection;
}
