import { AppService } from '@/app.service';
import { ProductRepository } from '@/database/repository/product.repository';
import { ProductResponseDto } from '@/dto/product-dto/product-response.dto';
import { ProductMock } from '@/mocks/product.mock';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppService', () => {
  let service: AppService;

  let mockProductRepository = {
    getAllProducts: jest.fn(),
    createProduct: jest.fn(),
    updateProduct: jest.fn(),
    deleteProduct: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        { provide: ProductRepository, useValue: mockProductRepository },
      ],
    }).compile();

    service = module.get<AppService>(AppService);
    mockProductRepository = await module.resolve(ProductRepository);
  });

  describe('When call endpoint to get all products', () => {
    it('should return all products from the database', async () => {
      const products = [ProductMock.mockCreateProductRequest()];

      mockProductRepository.getAllProducts.mockResolvedValueOnce(products);

      const result = await service.getAllProducts();

      expect(result).toMatchObject(products);
    });

    it('should only return products filtered from the database', async () => {
      const products = [ProductMock.mockCreateProductRequest()];

      mockProductRepository.getAllProducts.mockResolvedValueOnce(products);

      const result = await service.getAllProducts();

      const hasMatchAllFilteredProducts = result.every(
        (product: ProductResponseDto) =>
          product.category.name === ProductMock.mockProductQuery().category,
      );

      expect(hasMatchAllFilteredProducts).toBe(true);
    });
  });

  describe('When call endpoint to create a new product', () => {
    it('should return product id has been created', async () => {
      mockProductRepository.createProduct.mockResolvedValueOnce(
        ProductMock.mockProductId(),
      );

      const result = await service.createProduct(
        ProductMock.mockCreateProductRequest(),
      );

      expect(result).toMatchObject(ProductMock.mockCreatedSuccessResponse());
    });
  });

  describe('When call endpoint to update a new product', () => {
    it('should return product id has been updated', async () => {
      mockProductRepository.updateProduct.mockResolvedValueOnce(
        ProductMock.mockProductId(),
      );

      const result = await service.updateProduct(
        ProductMock.mockUpdatedProductRequest(),
      );

      expect(result).toMatchObject(ProductMock.mockUpdatedProductResponse());
    });

    it('should return product id not found', async () => {
      try {
        mockProductRepository.updateProduct.mockResolvedValueOnce(
          ProductMock.mockUpdatedProductErrorNotFound(),
        );

        await service.updateProduct(
          ProductMock.mockUpdatedProductRequestErrorNotFount(),
        );
      } catch (error) {
        expect(error).toMatchObject(ProductMock.mockProductErrorNotFound());
      }
    });
  });

  describe('When call endpoint to delete product', () => {
    it('should return product id not found', async () => {
      try {
        mockProductRepository.deleteProduct.mockResolvedValueOnce(
          ProductMock.mockUpdatedProductErrorNotFound(),
        );

        await service.deleteProduct(ProductMock.mockDeleteProductRequest().id);
      } catch (error) {
        expect(error).toMatchObject(ProductMock.mockProductErrorNotFound());
      }
    });

    it('should return product id not found', async () => {
      mockProductRepository.updateProduct.mockResolvedValueOnce(
        ProductMock.mockProductId(),
      );

      const result = await service.updateProduct(
        ProductMock.mockUpdatedProductRequest(),
      );

      expect(result).toMatchObject(ProductMock.mockUpdatedProductResponse());
    });
  });
});
