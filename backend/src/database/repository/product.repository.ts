import { PrismaService } from '@/database/prisma.service';
import { ProductResponseDto } from '@/dto/product-dto/response.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProducts(): Promise<ProductResponseDto[]> {
    return await this.prisma.product.findMany({
      select: {
        name: true,
        price: true,
        description: true,
        purchaseDate: true,
        category: true,
      },
    });
  }
}
