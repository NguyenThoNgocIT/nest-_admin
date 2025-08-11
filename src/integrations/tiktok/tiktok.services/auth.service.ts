import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { generateSignature } from 'src/common';
import axios from 'axios';

@Injectable()
export class AuthTikTokShopService {
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) { }

async getAccessToken(authCode: string) {
    // URL chính xác từ tài liệu của TikTok Business API
    const tokenUrl = 'https://business-api.tiktok.com/open_api/v1.3/tt_user/oauth2/token/';

    const client_id = this.configService.get<string>('TIKTOK_SHOP_API_KEY');
    const client_secret = this.configService.get<string>('TIKTOK_SHOP_SECRET');
    const redirect_uri = this.configService.get<string>('TIKTOK_OAUTH_REDIRECT_URI');

    console.log('[Auth] tokenUrl =', tokenUrl);
    console.log('[Auth] client_id =', client_id);
    console.log('[Auth] client_secret =', client_secret);

    // Payload với các tham số đúng như tài liệu
    const payload = {
        client_id: client_id,
        client_secret: client_secret,
        grant_type: 'authorization_code',
        auth_code: authCode,
        redirect_uri: redirect_uri
    };

    try {
        const response = await axios.post(tokenUrl, payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.data?.access_token) {
            return response.data;
        }

        throw new Error(`TikTok API error: ${JSON.stringify(response.data)}`);
    } catch (error) {
        console.error('TikTok API error details:', {
            url: error.config?.url,
            status: error.response?.status,
            headers: error.response?.headers,
            data: error.response?.data
        });

        const apiError = error.response?.data || error.message;
        console.error('❌ TikTok API error:', apiError);

        throw new Error(`Failed to get access token: ${error.response?.data?.message || error.message}`);
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