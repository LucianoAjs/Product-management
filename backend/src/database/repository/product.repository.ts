import { PrismaService } from '@/database/prisma.service';
import { ProductRequestDto } from '@/dto/product-dto/request.dto';
import { ProductResponseDto } from '@/dto/product-dto/response.dto';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

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
        category: { select: { name: true } },
      },
    });
  }

  async createProduct(product: ProductRequestDto): Promise<CreateProduct> {
    return await this.prisma.product.upsert({
      where: { name: product.name },
      create: {
        ...product,
        category: {
          create: { ...product.category },
        },
      },
      update: {
        ...product,
        category: {
          update: { ...product.category },
        },
      },
      select: { id: true },
    });
  }
}

const createProduct = Prisma.validator<Prisma.ProductArgs>()({
  select: {
    id: true,
  },
});

type CreateProduct = Prisma.ProductGetPayload<typeof createProduct>;
