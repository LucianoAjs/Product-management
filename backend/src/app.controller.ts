import { PRODUCT } from '@/constants/product.constant';
import { ProductResponseDto } from '@/dto/product-dto/response.dto';
import { InternalServerErrorException } from '@/helpers/errors/internal-server-error.exception';
import { UnauthorizedException } from '@/helpers/errors/unauthorized.exception';
import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from 'app.service';

const {
  API_OPERATION,
  API_RESPONSE: {
    SUCCESS_OPERATION,
    INTERNAL_SERVER_ERROR,
    UNAUTHORIZED_OPERATION,
  },
} = PRODUCT;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('PRODUCT')
  @Get('product')
  @ApiOperation({
    summary: API_OPERATION.GET_ALL_PRODUCTS.SUMMARY,
    description: API_OPERATION.GET_ALL_PRODUCTS.DESCRIPTION,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SUCCESS_OPERATION.DESC,
    type: () => ProductResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: UNAUTHORIZED_OPERATION,
    type: () => UnauthorizedException,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: INTERNAL_SERVER_ERROR,
    type: () => InternalServerErrorException,
  })
  async getAllProducts(): Promise<ProductResponseDto[]> {
    return await this.appService.getAllProducts();
  }
}
