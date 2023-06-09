import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommonResponse } from '@core/models/common-response.dto';
import { ICreateProductRequest } from '@core/models/create-product-request.model';
import { IProductResponse } from '@core/models/product-response.model';
import { IUpdateProductRequest } from '@core/models/update-product-request.model';

import { environment } from '@env';

@Injectable()
export class ProductManagerService {
  public endpoint = environment.API;

  constructor(private http: HttpClient) {}

  public getAllProducts(category?: string) {
    const query = category ? `?category=${category}` : '';

    return this.http.get<IProductResponse[]>(
      `${this.endpoint}/product${query}`,
    );
  }

  public deleteProduct(id: string) {
    return this.http.delete<ICommonResponse>(`${this.endpoint}/product/${id}`);
  }

  public updateProduct(product: IUpdateProductRequest) {
    return this.http.put<ICommonResponse>(`${this.endpoint}/product`, product);
  }

  public createProduct(product: ICreateProductRequest) {
    return this.http.post<ICommonResponse>(`${this.endpoint}/product`, product);
  }
}
