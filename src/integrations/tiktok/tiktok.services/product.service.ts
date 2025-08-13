// product.service.ts
import { Injectable } from '@nestjs/common';
import { CallApiService } from '~/service/callApi/callAPi.service';

@Injectable()
export class ProductTikTokService {
    constructor(private readonly callApiService: CallApiService) { }

    async getProducts(_params: any, data: any) {
        const queryParams = {
            'page_size': data.page_size ?? 10,
            'page_number': data.page_number ?? 1,
        };

        return this.callApiService.CallApi(
            'POST',
            '/product/202309/products/search',
            {}, // body rỗng
            undefined,
            queryParams
        );

    }


    async getProductBrands() {
        try {
            // Gọi API 'products/brands' thông qua CallApiService
            const response = await this.callApiService.CallApi('GET', 'products/brands');
            // Trả về dữ liệu danh sách thương hiệu
            return response;
        } catch (error) {
            console.error('Failed to get product brands:', error);
            throw error;
        }
    }
    async getProductDetail(productId: string) {
        try {
            const response = await this.callApiService.CallApi(
                'GET',
                `products/details`,
                undefined,
                undefined,
                { product_id: productId }
            );
            return response;
        } catch (error) {
            throw error;
        }
    }

    async createProduct(productData: any) {
        try {
            const response = await this.callApiService.CallApi(
                'POST',
                'products',
                productData
            );
            return response;
        } catch (error) {
            throw error;
        }
    }

    async updateProduct(productId: string, productData: any) {
        try {
            const response = await this.callApiService.CallApi(
                'PUT',
                `products/${productId}`,
                productData
            );
            return response;
        } catch (error) {
            throw error;
        }
    }

    async deleteProducts(productIds: string[]) {
        try {
            const response = await this.callApiService.CallApi(
                'POST',
                'products/delete',
                { product_ids: productIds }
            );
            return response;
        } catch (error) {
            throw error;
        }
    }

    async activateProducts(productIds: string[]) {
        try {
            const response = await this.callApiService.CallApi(
                'POST',
                'products/activate',
                { product_ids: productIds }
            );
            return response;
        } catch (error) {
            throw error;
        }
    }

    async deactivateProducts(productIds: string[]) {
        try {
            const response = await this.callApiService.CallApi(
                'POST',
                'products/deactivate',
                { product_ids: productIds }
            );
            return response;
        } catch (error) {
            throw error;
        }
    }
}