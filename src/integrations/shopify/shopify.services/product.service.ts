import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { RestClient } from '@shopify/shopify-api';
import { Cache } from 'cache-manager';

@Injectable()
export class ProductShopifyService {
  constructor(
    @Inject('SHOPIFY_REST_CLIENT') private readonly restClient: RestClient,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) { }
  // Lấy danh sách sản phẩm
  async getProducts() {
    const cacheKey = 'shopify_products';
    const cachedData = await this.cacheManager.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }
    try {
      const response = await this.restClient.get({
        path: 'products',
      });
      const products = response.body.products;
      await this.cacheManager.set(cacheKey, products, 10 * 1000);
      return products;
    } catch (error) {
      throw new Error(`Failed to fetch products: ${error.message}`);
    }
  }

  // Lấy sản phẩm theo ID
  async getProductById(id: number) {
    const cacheKey = `shopify_product_${id}`;
    const cachedData = await this.cacheManager.get(cacheKey);

    if (cachedData) {
      return cachedData;
    }

    try {
      const response = await this.restClient.get({
        path: `products/${id}`,
      });
      const product = response.body.product;
      await this.cacheManager.set(cacheKey, product, 10 * 1000);
      return product;
    } catch (error) {
      throw new Error(`Failed to fetch product ${id}: ${error.message}`);
    }
  }

  // Tạo sản phẩm mới
  async createProduct(productData: any) {
    try {
      const response = await this.restClient.post({
        path: 'products',
        data: { product: productData },
      });
      const product = response.body.product;
      // Xóa cache danh sách sản phẩm để đảm bảo dữ liệu mới nhất
      await this.cacheManager.del('shopify_products');
      return product    } catch (error) {
      throw new Error(`Failed to create product: ${error.message}`);
    }
  }

  // Cập nhật sản phẩm
  async updateProduct(id: number, productData: any) {
    try {
      const response = await this.restClient.put({
        path: `products/${id}`,
        data: { product: productData },
      });
      const product = response.body.product;
      // Xóa cache cho sản phẩm cụ thể và danh sách sản phẩm
      await Promise.all([
        this.cacheManager.del(`shopify_product_${id}`),
        this.cacheManager.del('shopify_products'),
      ]);
      return product;
    } catch (error) {
      throw new Error(`Failed to update product ${id}: ${error.message}`);
    }
  }

  // Xóa sản phẩm
  async deleteProduct(id: number) {
    try {
      await this.restClient.delete({
        path: `products/${id}`,
      });
      // Xóa cache cho sản phẩm cụ thể và danh sách sản phẩm
      await Promise.all([
        this.cacheManager.del(`shopify_product_${id}`),
        this.cacheManager.del('shopify_products'),
      ]);
      return { message: `Product ${id} deleted successfully` };
    } catch (error) {
      throw new Error(`Failed to delete product ${id}: ${error.message}`);
    }
  }
}
