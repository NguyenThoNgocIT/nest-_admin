import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductShopifyService } from '../shopify.services/product.service';
import { Public } from '~/modules/auth/decorators/public.decorator';
import { CreateProductDto } from '~/common/dto/shopifyDto/product.dto';
import { ApiBody } from '@nestjs/swagger';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { SHOPIFY_PRODUCT_QUEUE } from '~/modules/shopify/constants';

@Controller('shopify')
export class ProductShopifyController {
  constructor(
    private readonly productService: ProductShopifyService,
    @InjectQueue(SHOPIFY_PRODUCT_QUEUE) private readonly shopifyProductQueue: Queue,

  ) { }

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

// Controller
@Public()
@Post('products')
@ApiBody({ type: CreateProductDto })
async createProduct(@Body() productData: any) {
  try {
    // Chuyển đổi thành plain object hoàn toàn
    
    const plainData = JSON.parse(JSON.stringify(productData));
    const job = await this.shopifyProductQueue.add('create-product', { 
      productData: plainData 
    });

    return {
      message: 'Yêu cầu tạo sản phẩm đã được tiếp nhận.',
      jobId: job.id
    };
  } catch (error) {
    console.error('Error adding job to queue:', error);
    throw error;
  }
}

  @Put('products/:id')
  async updateProduct(@Param('id', ParseIntPipe) id: number, @Body() productData: any) {
    // Thêm job cập nhật sản phẩm vào hàng đợi
    await this.shopifyProductQueue.add('update-product', { id, productData });
    return { message: `Yêu cầu cập nhật sản phẩm ID ${id} đã được tiếp nhận.` };
  }

  @Public()
  @Delete('products/:id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number) {
    // Thêm job xóa sản phẩm vào hàng đợi
    await this.shopifyProductQueue.add('delete-product', { id });
    return { message: `Yêu cầu xóa sản phẩm ID ${id} đã được tiếp nhận.` };
  }
}