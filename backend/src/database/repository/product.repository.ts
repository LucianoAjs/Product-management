import { PrismaService } from '@/database/prisma.service';
import { CreateProductRequestDto } from '@/dto/product-dto/create-product-request.dto';
import { ProductResponseDto } from '@/dto/product-dto/product-response.dto';
import { UpdateProductRequestDto } from '@/dto/product-dto/update-product-request.dto copy';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProducts(): Promise<ProductResponseDto[]> {
    return await this.prisma.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        purchaseDate: true,
        category: { select: { name: true } },
      },
    });
  }

  async createProduct(product: CreateProductRequestDto): Promise<ProductId> {
    return await this.prisma.product.create({
      data: {
        ...product,
        category: {
          create: { ...product.category },
        },
      },
      select: { id: true },
    });
  }

  async updateProduct(product: UpdateProductRequestDto): Promise<ProductId> {
    return await this.prisma.product.update({
      where: { id: product.id },
      data: {
        ...product,
        category: {
          update: {
            ...product.category,
          },
        },
      },
      select: { id: true },
    });
  }

  async deleteProduct(id: string): Promise<ProductId> {
    return await this.prisma.product.delete({
      where: { id },
      select: { id: true },
    });
  }
}

const productId = Prisma.validator<Prisma.ProductArgs>()({
  select: {
    id: true,
  },
});

type ProductId = Prisma.ProductGetPayload<typeof productId>;
