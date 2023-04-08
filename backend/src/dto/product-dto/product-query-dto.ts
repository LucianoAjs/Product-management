import { PRODUCT } from '@/constants/product.constant';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

const {
  API_PROPERTY: { CATEGORY },
} = PRODUCT;

export class ProductQueryDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    name: CATEGORY.NAME.NAME,
    example: CATEGORY.NAME.VALUE,
    description: CATEGORY.NAME.DESC,
    type: String,
    required: false,
  })
  category?: string;
}
