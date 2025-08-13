import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { generateSignature } from 'src/common';
import axios from 'axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
@Injectable()
export class AuthTikTokShopService {
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,

    ) { }
    async getAccessToken(code: string) {
        
        const app_key = this.configService.get<string>('TIKTOK_SHOP_API_KEY');
        const app_secret = this.configService.get<string>('TIKTOK_SHOP_SECRET');

        // Kiểm tra các tham số đầu vào
        if (!app_key || !app_secret || !code) {
            throw new Error(
                `Missing required parameters: app_key=${!!app_key}, app_secret=${!!app_secret}, code=${!!code}`,
            );
        }

        const params = {
            app_key,
            app_secret,
            auth_code: code, 
            grant_type: 'authorized_code',
        };
        const tokenUrl = 'https://auth.tiktok-shops.com/api/v2/token/get'; 

        try {
            // Gửi yêu cầu GET với tham số query
            const response = await axios.get(tokenUrl, { params });

            const responseData = response.data;
            if (responseData.data?.access_token) {
                console.log('✅ Access Token obtained successfully:', responseData);
                return responseData.data; // Access token nằm trong response.data.data
            }

            throw new Error(`TikTok API error: ${JSON.stringify(responseData)}`);
        } catch (error) {
            console.error('TikTok API error details:', {
                message: error.message,
                stack: error.stack,
                url: error.config?.url,
                status: error.response?.status,
                headers: error.response?.headers,
                data: error.response?.data,
            });

            const apiError = error.response?.data?.message || error.message;
            throw new Error(`Failed to get access token: ${apiError}`);
        }
    }
    async refreshAccessToken(refresh_token: string) {
        const refreshUrl = 'https://auth.tiktok-shops.com/api/v2/token/refresh';
        const app_key = this.configService.get<string>('TIKTOK_SHOP_API_KEY');
        const app_secret = this.configService.get<string>('TIKTOK_SHOP_SECRET');

        if (!app_key || !app_secret || !refresh_token) {
            throw new Error(
                `Missing required parameters: app_key=${!!app_key}, app_secret=${!!app_secret}, refresh_token=${!!refresh_token}`,
            );
        }

        const params = {
            app_key,
            app_secret,
            refresh_token,
            grant_type: 'refresh_token',
        };

        try {
            const response = await axios.get(refreshUrl, { params });
            const responseData = response.data;

            if (responseData.data?.access_token) {
                console.log('✅ Access Token refreshed successfully:', responseData);
                return responseData.data;
            }

            throw new Error(`TikTok API error: ${JSON.stringify(responseData)}`);
        } catch (error) {
            console.error('TikTok API refresh token error:', {
                message: error.message,
                stack: error.stack,
                url: error.config?.url,
                status: error.response?.status,
                headers: error.response?.headers,
                data: error.response?.data,
            });

            const apiError = error.response?.data?.message || error.message;
            throw new Error(`Failed to refresh access token: ${apiError}`);
        }
    }
    generateAuthUrl(): string {
        const appKey = this.configService.get<string>('TIKTOK_SHOP_API_KEY');
        const redirectUri = this.configService.get<string>('TIKTOK_OAUTH_REDIRECT_URI');
        const state = Math.random().toString(36).substring(2, 15); // Random state

        if (!appKey || !redirectUri) {
            throw new Error('Missing TIKTOK_SHOP_API_KEY or TIKTOK_OAUTH_REDIRECT_URI in configuration');
        }

        // TikTok Shop OAuth URL
        const authUrl =
            `https://services.tiktokshop.com/open/authorize?` +
            `app_key=${encodeURIComponent(appKey)}&` +
            `state=${encodeURIComponent(state)}&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}`;

        console.log('Generated OAuth URL:', authUrl);
        return authUrl;
    }

    async getAuthShop(app_key?: string): Promise<any> {
        const apiKey = this.configService.get<string>('TIKTOK_SHOP_API_KEY');
        const appSecret = this.configService.get<string>('TIKTOK_SHOP_SECRET');
        const timestamp = Math.floor(Date.now() / 1000);
        const access_token = await this.cacheManager.get<string>('tiktok_access_token');
        const apiUrl = this.configService.get<string>('TIKTOK_SHOP_API_URL');
        const apiPath = '/authorization/202309/shops';

        if (!access_token) {
            throw new Error('No access token available. Please authenticate via /api/oauth/tiktok/authorize.');
        }

        if (!appSecret) {
            throw new Error('Missing TIKTOK_SHOP_SECRET in configuration');
        }

        // Tạo tham số cho signature (KHÔNG bao gồm access_token)
        const paramsForSignature = {
            app_key: app_key || apiKey,
            timestamp: timestamp,
        };

        console.log('=== SIGNATURE DEBUG START ===');
        console.log('App Secret exists:', !!appSecret);
        console.log('App Secret length:', appSecret?.length);
        console.log('API Path:', apiPath);
        console.log('Params for signature:', paramsForSignature);

        // Sử dụng signature generator mới
        const signature = generateSignature(paramsForSignature, null, apiPath, appSecret);

        const params = {
            ...paramsForSignature,
            sign: signature,
        };

        const url = `${apiUrl}${apiPath}`;

        console.log('Final request params:', params);
        console.log('Request URL:', url);
        console.log('=== SIGNATURE DEBUG END ===');

        try {
            const response = await firstValueFrom(
                this.httpService.get(url, {
                    params: params,
                    headers: {
                        'Content-Type': 'application/json',
                        'x-tts-access-token': access_token,
                    },
                }),
            );

            console.log('✅ Shop response:', response.data);
            return response?.data?.data?.shops || [];
        } catch (error) {
            console.error('❌ Shop API error details:', {
                status: error.response?.status,
                statusText: error.response?.statusText,
                data: error.response?.data,
                url: url,
                requestParams: params,
            });
            throw new Error(`Failed to get shop info: ${error.message}`);
        }
    }
}