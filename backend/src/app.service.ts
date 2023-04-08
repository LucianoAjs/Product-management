import { ProductRepository } from '@/database/repository/product.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductResponseDto } from './dto/product-dto/response.dto';

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
}
