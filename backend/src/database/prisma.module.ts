import { PrismaService } from '@/database/prisma.service';
import { ProductRepository } from '@/database/repository/product.repository';
import { Global, Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const repositories = [ProductRepository];

@Global()
@Module({
  providers: [PrismaClient, PrismaService, ...repositories],
  exports: [PrismaClient, PrismaService, ...repositories],
})
export class PrismaModule {}
