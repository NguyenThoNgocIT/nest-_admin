import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductShopifyService } from '../shopify.services/product.service';
import { Public } from '~/modules/auth/decorators/public.decorator';

@Controller('shopify')
export class ProductShopifyController {
  constructor(private readonly productService: ProductShopifyService) { }

  // Lấy danh sách sản phẩm
  @Public()
  @Get('products')
  async getProducts() {
    return await this.productService.getProducts();
  }

  // Lấy sản phẩm theo ID
  @Public()
  @Get('products/:id')
  async getProductById(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.getProductById(id);
  }

  // Tạo sản phẩm mới
  @Post('products')
  async createProduct(@Body() productData: any) {
    return await this.productService.createProduct(productData);
  }

  // Cập nhật sản phẩm
  @Put('products/:id')
  async updateProduct(@Param('id', ParseIntPipe) id: number, @Body() productData: any) {
    return await this.productService.updateProduct(id, productData);
  }

  // Xóa sản phẩm
  @Delete('products/:id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.deleteProduct(id);
  }
}