import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

type NotFoundExceptionProps = {
  status: number;
  message: string;
};

export class NotFoundException extends HttpException {
  @ApiProperty({
    type: Number,
    example: HttpStatus.NOT_FOUND,
  })
  statusCode: number;

  @ApiProperty({
    type: String,
    example: 'Product 2f7032b8-7634-4b42-9824-425f60bd2e10 not found',
  })
  message: string;

  constructor({ message, status }: NotFoundExceptionProps) {
    super(
      {
        status,
        message,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
