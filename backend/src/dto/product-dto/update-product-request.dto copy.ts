import { PRODUCT } from '@/constants/product.constant';
import { CategoryDto } from '@/dto/product-dto/nested/category.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

const {
  API_PROPERTY: { DESCRIPTION, PRICE, PURCHASE_DATE, NAME, ID },
} = PRODUCT;

export class UpdateProductRequestDto {
  @ApiProperty({
    description: ID.DESC,
    example: ID.VALUE,
    type: String,
  })
  id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: NAME.DESC,
    example: NAME.VALUE,
    type: String,
  })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: DESCRIPTION.DESC,
    example: DESCRIPTION.VALUE,
    type: String,
  })
  description: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: PRICE.DESC,
    example: PRICE.VALUE,
    type: String,
  })
  price: string;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @ApiProperty({
    description: PURCHASE_DATE.DESC,
    example: PURCHASE_DATE.VALUE,
    type: String,
    required: false,
  })
  purchaseDate?: Date | undefined;

  @IsOptional()
  @IsObject()
  @ApiProperty({
    type: CategoryDto,
    required: false,
  })
  category?: CategoryDto;
}
