
import { Process, Processor } from '@nestjs/bull';
import { ProductShopifyService } from '../shopify.services/product.service';
import { Job } from 'bull';
import { SHOPIFY_PRODUCT_QUEUE } from '~/modules/shopify/constants';

@Processor(SHOPIFY_PRODUCT_QUEUE)
export class ProductShopifyProcessor {
  constructor(private readonly productService: ProductShopifyService) { }

  @Process('create-product')
  async handleCreateProduct(job: Job<{ productData: any }>) {
    const { productData } = job.data;
    try {
      await this.productService.createProductByGraphqlClient(productData);
    } catch (error) {
      console.error(`Lỗi khi tạo sản phẩm:`, {
        message: error.message,
        productTitle: productData?.title,
        // productData: JSON.stringify(productData, null, 2)
      });
      throw error;
    }
  }

  @Process('update-product')
  async handleUpdateProduct(job: Job<{ id: number; productData: any }>) {
    const { id, productData } = job.data;
    console.log(`Đang xử lý cập nhật sản phẩm ID ${id}...`);
    try {
      await this.productService.updateProduct(id, productData);
      console.log(`Cập nhật sản phẩm ID ${id} thành công!`);
    } catch (error) {
      console.error(`Lỗi khi cập nhật sản phẩm ${id}: ${error.message}`);
      throw error;
    }
  }

  @Process('delete-product')
  async handleDeleteProduct(job: Job<{ id: number }>) {
    const { id } = job.data;
    console.log(`Đang xử lý xóa sản phẩm ID ${id}...`);
    try {
      await this.productService.deleteProduct(id);
      console.log(`Xóa sản phẩm ID ${id} thành công!`);
    } catch (error) {
      console.error(`Lỗi khi xóa sản phẩm ${id}: ${error.message}`);
      throw error;
    }
  }
}