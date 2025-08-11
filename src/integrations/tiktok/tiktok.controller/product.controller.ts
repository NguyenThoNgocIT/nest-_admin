// product.controller.ts
import { Body, Controller, Get, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { ProductTikTokService } from '../tiktok.services/product.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Public } from '~/modules/auth/decorators/public.decorator';


@Controller('tiktok/products')
@ApiBearerAuth('JWT-auth')
export class ProductTikTokController {
    constructor(private readonly productService: ProductTikTokService) { }

    // @PermsGuard('PRODUCT.VIEW')
     @Public()
    @Post('search')
    async getProducts(
        @Query() params: any,
        @Body() searchData: any
    ) {
        const result = await this.productService.getProducts(params, searchData);
        return {
            success: true,
            data: result
        };
    }

    // @PermsGuard('PRODUCT.VIEW')
    @Get(':id')
    async getProductDetail(@Param('id') productId: string) {
        const result = await this.productService.getProductDetail(productId);
        return {
            success: true,
            data: result
        };
    }

    // @PermsGuard('PRODUCT.CREATE')
    @Post()
    async createProduct(@Body() productData: any) {
        const result = await this.productService.createProduct(productData);
        return {
            success: true,
            data: result
        };
    }

    // @PermsGuard('PRODUCT.UPDATE')
    @Put(':id')
    async updateProduct(
        @Param('id') productId: string, 
        @Body() productData: any
    ) {
        const result = await this.productService.updateProduct(productId, productData);
        return {
            success: true,
            data: result
        };
    }

    // @PermsGuard('PRODUCT.DELETE')
    @Delete()
    async deleteProducts(@Body() { product_ids }: { product_ids: string[] }) {
        const result = await this.productService.deleteProducts(product_ids);
        return {
            success: true,
            data: result
        };
    }

    // @PermsGuard('PRODUCT.UPDATE')
    @Post('activate')
    async activateProducts(@Body() { product_ids }: { product_ids: string[] }) {
        const result = await this.productService.activateProducts(product_ids);
        return {
            success: true,
            data: result
        };
    }

    // @PermsGuard('PRODUCT.UPDATE')
    @Post('deactivate')
    async deactivateProducts(@Body() { product_ids }: { product_ids: string[] }) {
        const result = await this.productService.deactivateProducts(product_ids);
        return {
            success: true,
            data: result
        };
    }
}