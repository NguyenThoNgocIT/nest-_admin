// product.service.ts
import { Injectable } from '@nestjs/common';
import { CallApiService } from '~/service/callApi/callAPi.service';

@Injectable()
export class ProductTikTokService {
    constructor(private readonly callApiService: CallApiService) { }

    async getProducts(params: any, data: any) {
        try {
            
            const response = await this.callApiService.CallApi(
                'POST', 
                'products/search', 
                data, 
                undefined, 
                params
            );
            return response;
        } catch (error) {
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