import { PRODUCT } from '@/constants/product.constant';
import { SuccessResponseDto } from '@/dto/common-dto/success-response.dto';
import { CreateProductRequestDto } from '@/dto/product-dto/create-product-request.dto';
import { UpdateProductRequestDto } from '@/dto/product-dto/update-product-request.dto copy';
import { HttpStatus } from '@nestjs/common';

const {
  API_RESPONSE: {
    SUCCESS_CREATED_RESPONSE,
    SUCCESS_DELETED_RESPONSE,
    SUCCESS_UPDATED_RESPONSE,
  },
} = PRODUCT;

export class ProductMock {
  public static mockProductId = (): string =>
    '2f7032b8-7634-4b42-9824-425f60bd2e8f';

  public static mockProductRequest = (): CreateProductRequestDto => {
    return {
      id: this.mockProductId(),
      name: 'Processador',
      description: 'Processador AMD Ryzen 5 4600G',
      price: '2.000',
      purchaseDate: new Date('06/04/2023'),
      category: {
        name: 'Livro',
      },
    };
  };

  public static mockCreatedSuccessResponse = (): SuccessResponseDto => {
    return {
      message: SUCCESS_CREATED_RESPONSE(this.mockProductId()),
      status: HttpStatus.CREATED,
    };
  };

  public static mockUpdatedProductRequest = (): UpdateProductRequestDto => {
    return {
      id: this.mockProductId(),
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
      message: SUCCESS_UPDATED_RESPONSE(this.mockProductId()),
      status: HttpStatus.OK,
    };
  };

  public static mockDeleteProductRequest = (): { id: string } => {
    return {
      id: this.mockProductId(),
    };
  };

  public static mockDeleteProductResponse = (): SuccessResponseDto => {
    return {
      message: SUCCESS_DELETED_RESPONSE(this.mockProductId()),
      status: HttpStatus.OK,
    };
  };
}
