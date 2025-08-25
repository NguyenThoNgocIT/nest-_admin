import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { ProductShopifyService } from '../shopify.services/product.service';
import { Public } from '~/modules/auth/decorators/public.decorator';
import { CreateProductDto } from '~/common/dto/shopifyDto/product.dto';
import { ApiBody } from '@nestjs/swagger';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { SHOPIFY_PRODUCT_QUEUE } from '~/modules/shopify/constants';
import { PrintifyService } from '~/shared/printify/printify.service';
import { Entity, Column, PrimaryGeneratedColumn, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Entity()
export class ProductMapping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  printifyProductId: string;

  @Column()
  shopifyProductId: string;
}
@Controller('shopify')
export class ProductShopifyController {
  constructor(
    private readonly productService: ProductShopifyService,
    private readonly printifyService: PrintifyService,
    @InjectQueue(SHOPIFY_PRODUCT_QUEUE) private readonly shopifyProductQueue: Queue,
    @InjectRepository(ProductMapping) private readonly productMappingRepo: Repository<ProductMapping>,

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

  // Đồng bộ sản phẩm từ Printify và tạo trên Shopify
  @Public()
  @Post('printify/sync-products')
  async syncPrintifyProducts(@Query('shopId') shopId: string) {
    const printifyProducts = await this.printifyService.syncProducts(shopId);
    for (const product of printifyProducts) {
      const shopifyProductData = {
        title: product.title,
        descriptionHtml: product.description,
        variants: product.variants.map(v => ({
          option1: v.size,
          price: v.price / 100, // Printify price in cents
        })),
        images: product.images.map(img => ({ src: img.src })),
      };
      const job = await this.shopifyProductQueue.add('create-product', { productData: shopifyProductData });
    // Đợi job hoàn thành để lấy Shopify product ID
    const jobResult = await job.finished(); 
    if (!jobResult || !jobResult.id) {
          console.error('Job failed or returned no product ID', { productTitle: product.title });
          continue; // Skip to next product
        }
    const shopifyProductId = String(jobResult.id); 
    
    await this.productMappingRepo.save({
      printifyProductId: String(product.id), 
      shopifyProductId, 
    });
    }
    return { message: 'Product sync initiated' };
  }
  // Lấy thông tin cửa hàng Shopify
  @Public()
    @Get('shop-info')
  async getShopInfo() {
    return this.productService.getShopInfo();
  }
}