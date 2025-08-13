import { HttpService } from '@nestjs/axios';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthTikTokShopService } from '../../integrations/tiktok/tiktok.services/auth.service';
import { generateSignature } from 'src/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CallApiService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly authTikTokShopService: AuthTikTokShopService,
    private readonly configService: ConfigService,
  ) { }

  async CallApi<T>(
    method: string,
    endpoint: string,
    data?: any,
    app_key?: string,
    params?: Record<string, any>,
  ): Promise<T> {
    try {
      let tiktok_access_token = await this.cacheManager.get<string>('tiktok_access_token');
      let access_token_expire_in = await this.cacheManager.get<number>('access_token_expire_in');
      let refresh_token = await this.cacheManager.get<string>('refresh_token');
      let cipher_shop = await this.cacheManager.get<string>('cipher_shop');

      const currentTime = Math.floor(Date.now() / 1000);
      if (!tiktok_access_token || (access_token_expire_in && currentTime >= access_token_expire_in)) {
        if (!refresh_token) {
          throw new Error('No refresh token available. Please re-authenticate.');
        }

        const tokenResponse = await this.authTikTokShopService.refreshAccessToken(refresh_token);
        if (tokenResponse?.access_token) {
          tiktok_access_token = tokenResponse.access_token;
          access_token_expire_in = tokenResponse.access_token_expire_in;
          refresh_token = tokenResponse.refresh_token || refresh_token;
          await this.cacheManager.set('tiktok_access_token', tiktok_access_token, 86400);
          await this.cacheManager.set('access_token_expire_in', access_token_expire_in, 86400);
          await this.cacheManager.set('refresh_token', refresh_token, 86400);
        } else {
          throw new Error('Failed to refresh access token');
        }
      }

      if (endpoint.includes('product') || endpoint.includes('order')) {
        if (!cipher_shop) {
          const datashop = await this.authTikTokShopService.getAuthShop(app_key);
          if (datashop && datashop.length > 0) {
            cipher_shop = datashop[0].cipher;
            await this.cacheManager.set('cipher_shop', cipher_shop, 86400);
          } else {
            throw new Error('Failed to get shop cipher');
          }
        }
      }

      const appKey = app_key || this.configService.get<string>('TIKTOK_SHOP_API_KEY');
      const appSecret = this.configService.get<string>('TIKTOK_SHOP_SECRET');
      const domain = this.configService.get<string>('TIKTOK_SHOP_API_URL');

      if (!appKey || !appSecret || !domain) {
        throw new Error('API configuration is incomplete');
      }

      const requestParams: Record<string, any> = {
        app_key: appKey,
        timestamp: Math.floor(Date.now() / 1000),
        ...params,
      };
      if ((endpoint.includes('product') || endpoint.includes('order')) && cipher_shop) {
        requestParams.shop_cipher = cipher_shop;
      }
      let requestBody = data;

      const signature = generateSignature(requestParams, requestBody, endpoint, appSecret);
      requestParams.sign = signature;

      const fullUrl = `${domain}${endpoint}`;

      const config: AxiosRequestConfig = {
        method: method.toLowerCase() as any,
        url: fullUrl,
        headers: {
          'Content-Type': 'application/json',
          'x-tts-access-token': tiktok_access_token
        },
        params: requestParams,
        data: requestBody,
      };

      const response: AxiosResponse<T> = await this.httpService.axiosRef(config);
      return response.data;
    } catch (error) {
      console.error('API Call Error:', {
        endpoint: endpoint,
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        url: error.config?.url,
      });

      if (error.response?.status === 401) {
        await this.cacheManager.del('tiktok_access_token');
        await this.cacheManager.del('access_token_expire_in');
        await this.cacheManager.del('refresh_token');
        await this.cacheManager.del('cipher_shop');
      }

      throw new HttpException(
        {
          message: error.response?.data?.message || error.message,
          details: error.response?.data,
          endpoint: endpoint
        },
        error.response?.status || 500,
      );
    }
  }
}