import { PRODUCT } from '@/constants/product.constant';
import { ProductRepository } from '@/database/repository/product.repository';
import { SuccessResponseDto } from '@/dto/common-dto/success-response.dto';
import { CreateProductRequestDto } from '@/dto/product-dto/create-product-request.dto';
import { ProductQueryDto } from '@/dto/product-dto/product-query-dto';
import { ProductResponseDto } from '@/dto/product-dto/product-response.dto';
import { UpdateProductRequestDto } from '@/dto/product-dto/update-product-request.dto copy';
import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { NotFoundException } from './helpers/errors/not-found-exception';

const {
  API_RESPONSE: {
    SUCCESS_CREATED_RESPONSE,
    SUCCESS_UPDATED_RESPONSE,
    SUCCESS_DELETED_RESPONSE,
    ERROR_NOT_FOUND_RESPONSE,
  },
} = PRODUCT;

@Injectable()
export class AppService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAllProducts(
    params?: ProductQueryDto,
  ): Promise<ProductResponseDto[]> {
    try {
      return await this.productRepository.getAllProducts(params);
    } catch (error) {
      throw new BadRequestException(error.meta.cause);
    }
  }

  async createProduct(
    product: CreateProductRequestDto,
  ): Promise<SuccessResponseDto> {
    try {
      const { id } = await this.productRepository.createProduct(product);

      return {
        message: SUCCESS_CREATED_RESPONSE(id),
        status: HttpStatus.CREATED,
      };
    } catch (error) {
      throw new BadRequestException(error.meta.cause);
    }
  }

  async updateProduct(
    product: UpdateProductRequestDto,
  ): Promise<SuccessResponseDto> {
    try {
      const { id } = await this.productRepository.updateProduct(product);

      return {
        message: SUCCESS_UPDATED_RESPONSE(id),
        status: HttpStatus.OK,
      };
    } catch (error) {
      throw new NotFoundException({
        message: ERROR_NOT_FOUND_RESPONSE(product.id),
        status: HttpStatus.NOT_FOUND,
      });
    }
  }

  async deleteProduct(productId: string): Promise<SuccessResponseDto> {
    try {
      const { id } = await this.productRepository.deleteProduct(productId);

      return {
        message: SUCCESS_DELETED_RESPONSE(id),
        status: HttpStatus.OK,
      };
    } catch (error) {
      throw new NotFoundException({
        message: ERROR_NOT_FOUND_RESPONSE(productId),
        status: HttpStatus.NOT_FOUND,
      });
    }
  }
}
