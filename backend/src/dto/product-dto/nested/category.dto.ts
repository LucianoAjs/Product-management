import { PRODUCT } from '@/constants/product.constant';
import { ApiProperty } from '@nestjs/swagger';

const {
  API_PROPERTY: {
    CATEGORY: { NAME },
  },
} = PRODUCT;

export class CategoryDto {
  @ApiProperty({
    description: NAME.DESC,
    example: NAME.VALUE,
    type: String,
  })
  name: string;
}
