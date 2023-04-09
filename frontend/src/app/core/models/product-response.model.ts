import { ICategory } from '@core/models/category.model';

export interface IProductResponse {
  id: string;
  name: string;
  description: string;
  price: string;
  purchaseDate?: Date | undefined;
  category?: ICategory;
}
