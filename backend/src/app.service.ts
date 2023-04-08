import { PRODUCT } from '@/constants/product.constant';
import { ProductRepository } from '@/database/repository/product.repository';
import { SuccessResponseDto } from '@/dto/common-dto/success-response.dto';
import { ProductRequestDto } from '@/dto/product-dto/request.dto';
import { ProductResponseDto } from '@/dto/product-dto/response.dto';
import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';

const {
  API_RESPONSE: { SUCCESS_CREATED_RESPONSE },
} = PRODUCT;

@Injectable()
export class AppService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAllProducts(): Promise<ProductResponseDto[]> {
    try {
      return await this.productRepository.getAllProducts();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async createProduct(product: ProductRequestDto): Promise<SuccessResponseDto> {
    try {
      const { id } = await this.productRepository.createProduct(product);

      return {
        message: SUCCESS_CREATED_RESPONSE(id),
        status: HttpStatus.CREATED,
      };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
