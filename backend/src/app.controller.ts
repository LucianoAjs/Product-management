import { PRODUCT } from '@/constants/product.constant';
import { SuccessResponseDto } from '@/dto/common-dto/success-response.dto';
import { ProductRequestDto } from '@/dto/product-dto/request.dto';
import { ProductResponseDto } from '@/dto/product-dto/response.dto';
import { InternalServerErrorException } from '@/helpers/errors/internal-server-error.exception';
import { UnauthorizedException } from '@/helpers/errors/unauthorized.exception';
import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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

  @ApiTags('PRODUCT')
  @Post('product')
  @ApiOperation({
    summary: API_OPERATION.CREATE_PRODUCT.SUMMARY,
    description: API_OPERATION.CREATE_PRODUCT.DESCRIPTION,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SUCCESS_OPERATION.DESC,
    type: () => SuccessResponseDto,
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
  @ApiBody({
    required: true,
    type: () => ProductRequestDto,
  })
  async createProduct(
    @Body() body: ProductRequestDto,
  ): Promise<SuccessResponseDto> {
    return await this.appService.createProduct(body);
  }
}
