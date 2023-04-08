import { PRODUCT } from '@/constants/product.constant';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryDto } from './nested/category.dto';

const {
  API_PROPERTY: { DESCRIPTION, PRICE, PURCHASE_DATE, NAME },
} = PRODUCT;

export class ProductResponseDto {
  @ApiProperty({
    description: NAME.DESC,
    example: NAME.VALUE,
    type: String,
  })
  name: string;

  @ApiProperty({
    description: DESCRIPTION.DESC,
    example: DESCRIPTION.VALUE,
    type: String,
  })
  description: string;

  @ApiProperty({
    description: PRICE.DESC,
    example: PRICE.VALUE,
    type: String,
  })
  price: string;

  @ApiProperty({
    description: PURCHASE_DATE.DESC,
    example: PURCHASE_DATE.VALUE,
    type: String,
    required: false,
  })
  purchaseDate?: Date | undefined;

  @ApiProperty({
    type: CategoryDto,
    required: false,
  })
  category?: CategoryDto;
}
