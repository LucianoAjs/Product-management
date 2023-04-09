import { ICategory } from '@core/models/category.model';

export interface IUpdateProductRequest {
  id: string;
  name: string;
  description: string;
  price: string;
  purchaseDate?: Date | undefined;
  category?: ICategory;
}
