import { PRODUCT } from '@/constants/product.constant';
import { SuccessResponseDto } from '@/dto/common-dto/success-response.dto';
import { CreateProductRequestDto } from '@/dto/product-dto/create-product-request.dto';
import { ProductQueryDto } from '@/dto/product-dto/product-query-dto';
import { UpdateProductRequestDto } from '@/dto/product-dto/update-product-request.dto copy';
import { NotFoundException } from '@/helpers/errors/not-found-exception';
import { HttpStatus } from '@nestjs/common';

const {
  API_RESPONSE: {
    SUCCESS_CREATED_RESPONSE,
    SUCCESS_DELETED_RESPONSE,
    SUCCESS_UPDATED_RESPONSE,
    ERROR_NOT_FOUND_RESPONSE,
  },
} = PRODUCT;

export class ProductMock {
  public static mockProductId = (): { id: string } => {
    return { id: '2f7032b8-7634-4b42-9824-425f60bd2e8f' };
  };

  public static mockProductIdError = (): { id: string } => {
    return { id: '2f7032b8-7634-4b42-9824-425f60bd2e10' };
  };

  public static mockCreateProductRequest = (): CreateProductRequestDto => {
    return {
      id: this.mockProductId().id,
      name: 'Processador',
      description: 'Processador AMD Ryzen 5 4600G',
      price: '2.000',
      purchaseDate: new Date('06/04/2023'),
      category: {
        name: 'Livro',
      },
    };
  };

  public static mockProductQuery = (): ProductQueryDto => {
    return {
      category: 'Livro',
    };
  };

  public static mockProductQueryResponse = (): CreateProductRequestDto[] => {
    return [this.mockCreateProductRequest()];
  };

  public static mockCreatedSuccessResponse = (): SuccessResponseDto => {
    return {
      message: SUCCESS_CREATED_RESPONSE(this.mockProductId().id),
      status: HttpStatus.CREATED,
    };
  };

  public static mockUpdatedProductRequest = (): UpdateProductRequestDto => {
    return {
      id: this.mockProductId().id,
      name: 'Processador',
      description: 'Processador AMD Ryzen 5 4600G',
      price: '2.000',
      purchaseDate: new Date('06/04/2023'),
      category: {
        name: 'Livro',
      },
    };
  };

  public static mockUpdatedProductRequestErrorNotFount =
    (): UpdateProductRequestDto => {
      return {
        id: this.mockProductIdError().id,
        name: 'Processador',
        description: 'Processador AMD Ryzen 5 4600G',
        price: '2.000',
        purchaseDate: new Date('06/04/2023'),
        category: {
          name: 'Livro',
        },
      };
    };

  public static mockUpdatedProductResponse = (): SuccessResponseDto => {
    return {
      message: SUCCESS_UPDATED_RESPONSE(this.mockProductId().id),
      status: HttpStatus.OK,
    };
  };

  public static mockUpdatedProductErrorNotFound = (): SuccessResponseDto => {
    throw new NotFoundException({
      message: ERROR_NOT_FOUND_RESPONSE(this.mockProductIdError().id),
      status: HttpStatus.NOT_FOUND,
    });
  };

  public static mockProductErrorNotFound = (): SuccessResponseDto => {
    return {
      message: ERROR_NOT_FOUND_RESPONSE(this.mockProductIdError().id),
      status: HttpStatus.NOT_FOUND,
    };
  };

  public static mockDeleteProductRequest = (): { id: string } => {
    return {
      id: this.mockProductId().id,
    };
  };

  public static mockDeleteProductResponse = (): SuccessResponseDto => {
    return {
      message: SUCCESS_DELETED_RESPONSE(this.mockProductId().id),
      status: HttpStatus.OK,
    };
  };
}
