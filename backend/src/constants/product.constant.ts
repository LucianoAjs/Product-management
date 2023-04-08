import { CATEGORY } from '@/constants/category.constant';

export const PRODUCT = {
  API_OPERATION: {
    CREATE_PRODUCT: {
      SUMMARY: 'Create a new product',
      DESCRIPTION: 'This endpoint is for create a new product',
    },
    UPDATE_PRODUCT: {
      SUMMARY: 'Update a product',
      DESCRIPTION: 'This endpoint is for update a product',
    },
    DELETE_PRODUCT: {
      SUMMARY: 'Delete a product',
      DESCRIPTION: 'This endpoint is for delete a product',
    },
    GET_ALL_PRODUCTS: {
      SUMMARY: 'Get all products',
      DESCRIPTION: 'This endpoint is for get all products',
    },
  },
  API_RESPONSE: {
    SUCCESS_OPERATION: {
      DESC: 'SuccessFully operation',
      VALUE: 'Product 1 has been updated',
    },
    UNAUTHORIZED_OPERATION: 'Unauthorized',
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    SUCCESS_CREATED_RESPONSE: (productId: string) =>
      `Product ${productId} has been created`,
    SUCCESS_UPDATED_RESPONSE: (productId: string) =>
      `Product ${productId} has been updated`,
    SUCCESS_DELETED_RESPONSE: (productId: string) =>
      `Product ${productId} has been deleted`,
    ERROR_NOT_FOUND_RESPONSE: (productId: string) =>
      `Product ${productId} not found`,
  },
  API_PROPERTY: {
    ID: {
      DESC: 'Product id.',
      VALUE: '231oih3oi215u139ud01jidw232e',
    },
    NAME: {
      DESC: 'Product name.',
      VALUE: 'Processador',
    },
    DESCRIPTION: {
      DESC: 'Product descripion.',
      VALUE: 'Processador AMD Ryzen 5 4600G',
    },
    PRICE: {
      DESC: 'Product price.',
      VALUE: '2.000',
    },
    PURCHASE_DATE: {
      DESC: 'Product purchase date.',
      VALUE: '06/04/2023',
    },
    CATEGORY,
  },
};
