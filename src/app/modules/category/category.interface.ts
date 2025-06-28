export interface ICategory {
  categoryId: number;
  name: string;
  slug: string;
  heroTitle: string;
  description: string;
}

export interface ICategoryResponse {
  categories: ICategory[];
}
