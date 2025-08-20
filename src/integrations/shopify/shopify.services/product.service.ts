import { Inject, Injectable } from '@nestjs/common';
import { RestClient } from '@shopify/shopify-api';

@Injectable()
export class ProductShopifyService {
  constructor(@Inject('SHOPIFY_REST_CLIENT') private readonly shopify: RestClient) { }

  // Lấy danh sách sản phẩm
  async getProducts() {
    try {
      const response = await this.shopify.get({
        path: 'products',
      });
      return response.body.products;
    } catch (error) {
      throw new Error(`Failed to fetch products: ${error.message}`);
    }
  }

  // Lấy sản phẩm theo ID
  async getProductById(id: number) {
    try {
      const response = await this.shopify.get({
        path: `products/${id}`,
      });
      return response.body.product;
    } catch (error) {
      throw new Error(`Failed to fetch product ${id}: ${error.message}`);
    }
  }

  // Tạo sản phẩm mới
  async createProduct(productData: any) {
    try {
      const response = await this.shopify.post({
        path: 'products',
        data: { product: productData },
      });
      return response.body.product;
    } catch (error) {
      throw new Error(`Failed to create product: ${error.message}`);
    }
  }

  // Cập nhật sản phẩm
  async updateProduct(id: number, productData: any) {
    try {
      const response = await this.shopify.put({
        path: `products/${id}`,
        data: { product: productData },
      });
      return response.body.product;
    } catch (error) {
      throw new Error(`Failed to update product ${id}: ${error.message}`);
    }
  }

  // Xóa sản phẩm
  async deleteProduct(id: number) {
    try {
      await this.shopify.delete({
        path: `products/${id}`,
      });
      return { message: `Product ${id} deleted successfully` };
    } catch (error) {
      throw new Error(`Failed to delete product ${id}: ${error.message}`);
    }
  }
}
