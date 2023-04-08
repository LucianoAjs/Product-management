import { PRODUCT } from '@/constants/product.constant';
import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

const {
  API_RESPONSE: { SUCCESS_OPERATION },
} = PRODUCT;

export class SuccessResponseDto {
  @ApiProperty({
    description: SUCCESS_OPERATION.DESC,
    example: SUCCESS_OPERATION.VALUE,
    type: String,
  })
  message: string;

  @ApiProperty({
    example: HttpStatus.OK,
    type: Number,
  })
  status: number;
}
