import { PRODUCT } from '@/constants/product.constant';
import { SuccessResponseDto } from '@/dto/common-dto/success-response.dto';
import { CreateProductRequestDto } from '@/dto/product-dto/create-product-request.dto';
import { ProductQueryDto } from '@/dto/product-dto/product-query-dto';
import { ProductResponseDto } from '@/dto/product-dto/product-response.dto';
import { UpdateProductRequestDto } from '@/dto/product-dto/update-product-request.dto copy';
import { InternalServerErrorException } from '@/helpers/errors/internal-server-error.exception';
import { UnauthorizedException } from '@/helpers/errors/unauthorized.exception';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
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
  async getAllProducts(
    @Query() params: ProductQueryDto,
  ): Promise<ProductResponseDto[]> {
    return await this.appService.getAllProducts(params);
  }

  @ApiTags('PRODUCT')
  @Post('product')
  @ApiOperation({
    summary: API_OPERATION.CREATE_PRODUCT.SUMMARY,
    description: API_OPERATION.CREATE_PRODUCT.DESCRIPTION,
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
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
    type: () => CreateProductRequestDto,
  })
  async createProduct(
    @Body() body: CreateProductRequestDto,
  ): Promise<SuccessResponseDto> {
    return await this.appService.createProduct(body);
  }

  @ApiTags('PRODUCT')
  @Put('product')
  @ApiOperation({
    summary: API_OPERATION.UPDATE_PRODUCT.SUMMARY,
    description: API_OPERATION.UPDATE_PRODUCT.DESCRIPTION,
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
    type: () => UpdateProductRequestDto,
  })
  async updateProduct(
    @Body() body: UpdateProductRequestDto,
  ): Promise<SuccessResponseDto> {
    return await this.appService.updateProduct(body);
  }

  @ApiTags('PRODUCT')
  @Delete('product/:id')
  @ApiOperation({
    summary: API_OPERATION.DELETE_PRODUCT.SUMMARY,
    description: API_OPERATION.DELETE_PRODUCT.DESCRIPTION,
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
  async deleteProduct(@Param('id') id: string): Promise<SuccessResponseDto> {
    return await this.appService.deleteProduct(id);
  }
}
