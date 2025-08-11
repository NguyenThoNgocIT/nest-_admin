import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { generateSignature } from 'src/common';

@Injectable()
export class AuthTikTokShopService {
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) { }

    async getAccessToken(): Promise<any> {
        const apiKey = this.configService.get<string>('TIKTOK_SHOP_API_KEY');
        const secret = this.configService.get<string>('TIKTOK_SHOP_SECRET');
        const auth_code = this.configService.get<string>('TIKTOK_SHOP_AUTH_CODE'); // Sửa lỗi này

        const params = {
            app_key: apiKey,
            app_secret: secret,
            auth_code: auth_code,
            grant_type: "authorized_code"
        };

        const url = `${this.configService.get<string>('TIKTOK_SHOP_API_URL')}/token/get`;

        console.log('Calling TikTok API:', url);
        console.log('Params:', { ...params, app_secret: '***hidden***' });

        try {
            const response = await firstValueFrom(
                this.httpService.post(url, params, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }),
            );
            
            console.log('Token response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Token error details:', {
                status: error.response?.status,
                statusText: error.response?.statusText,
                data: error.response?.data,
                url: url
            });
            throw new Error(`Failed to get access token: ${error.message}`);
        }
    }

    async getAuthShop(app_key?: string): Promise<any> {
        const apiKey = this.configService.get<string>('TIKTOK_SHOP_API_KEY');
        const timestamp = Math.floor(Date.now() / 1000);
        const signature = generateSignature({
            timestamp: timestamp
        }, "", "/authorization/202309/shops") // Sửa URL path

        const params = {
            app_key: app_key ? app_key : apiKey,
            sig: signature,
            timestamp: timestamp,
        };

        const url = `${this.configService.get<string>('TIKTOK_SHOP_API_URL')}/authorization/202309/shops`;

        console.log('Getting shop info:', url);
        console.log('Params:', params);

        try {
            const response = await firstValueFrom(
                this.httpService.get(url, { // Đổi từ POST sang GET
                    params: params,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }),
            );
            
            console.log('Shop response:', response.data);
            return response?.data?.shops;
        } catch (error) {
            console.error('Shop error details:', {
                status: error.response?.status,
                statusText: error.response?.statusText,
                data: error.response?.data,
                url: url
            });
            throw new Error(`Failed to get shop info: ${error.message}`);
        }
    }
}