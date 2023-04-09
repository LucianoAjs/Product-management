import { ICategory } from '@core/models/category.model';

export interface ICreateProductRequest {
  name: string;
  description: string;
  price: string;
  purchaseDate?: Date | undefined;
  category?: ICategory;
}
