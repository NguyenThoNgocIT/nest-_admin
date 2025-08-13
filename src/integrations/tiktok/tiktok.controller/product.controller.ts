// product.controller.ts
import { Body, Controller, Get, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { ProductTikTokService } from '../tiktok.services/product.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Public } from '~/modules/auth/decorators/public.decorator';
import { ProductListzDto, ProductSearchzDto } from '~/common/dto/tiktokDto/product.dto';
import { ERR_CODE } from '~/common';
import { UnAuthErr } from '~/common/error';


@Controller('tiktok/product')
@ApiBearerAuth('JWT-auth')
export class ProductTikTokController {
    constructor(private readonly productService: ProductTikTokService) { }

    // @PermsGuard('PRODUCT.VIEW')
    @Public()
    @Post('search')
    async getProducts(@Body() body:  ProductSearchzDto ) {
        const result = await this.productService.getProducts({}, body);
        if (result) {
            return result;
        } else {
            throw new UnAuthErr(ERR_CODE.LIST_NOT_FOUND);
        }
    }

    @Public()
    @Get('brands')
    async getProductBrands() {
        return this.productService.getProductBrands();
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