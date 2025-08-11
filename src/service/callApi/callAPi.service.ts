import { HttpService } from '@nestjs/axios';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthTikTokShopService } from '../../integrations/tiktok/tiktok.services/auth.service';
import { generateSignature } from 'src/common';

@Injectable()
export class CallApiService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly authTikTokShopService: AuthTikTokShopService,
  ) {}

// Sửa lỗi trong CallApiService
async CallApi<T>(
  method: string,
  url: string,
  data?: any,
  app_key?: string,
  params?: Record<string, any>,
): Promise<T> {
  try {
    // Retrieve access token from cache or fetch new one
    let tiktok_access_token = await this.cacheManager.get<string>('tiktok_access_token');
    let cipher_shop = await this.cacheManager.get<string>('cipher_shop');

    if (!tiktok_access_token) {
      console.log('Getting new access token...');
      
      // ✅ FIXED: Truyền auth_code từ env
      const auth_code = process.env.TIKTOK_SHOP_AUTH_CODE;
      if (!auth_code) {
        throw new Error('TIKTOK_SHOP_AUTH_CODE not found in environment variables');
      }
      
      const tokenResponse = await this.authTikTokShopService.getAccessToken(auth_code);

      if (tokenResponse?.access_token) {
        tiktok_access_token = tokenResponse.access_token;
        await this.cacheManager.set('tiktok_access_token', tiktok_access_token, 86400000); // 24h
      } else {
        throw new Error('Failed to get access token from response');
      }
    }

    if (!cipher_shop) {
      console.log('Getting shop cipher...');
      const datashop = await this.authTikTokShopService.getAuthShop(app_key);
      if (datashop && datashop.length > 0) {
        cipher_shop = datashop[0].cipher;
        await this.cacheManager.set('cipher_shop', cipher_shop, 86400000); // 24h
      }
    }

    // Prepare parameters
    const requestParams: Record<string, any> = {
      app_key: app_key || process.env.TIKTOK_SHOP_API_KEY, // ✅ FIXED: Đổi từ TIKTOK_SHOP_APP_KEY
      timestamp: Math.floor(Date.now() / 1000),
      shop_cipher: cipher_shop,
      ...params,
    };

    // Generate signature
    const signature = generateSignature(requestParams, data, `/${url}`); // ✅ FIXED: Thêm "/" đầu URL
    requestParams.sign = signature;

    // Determine domain
    const domain =
      process.env.NODE_ENV === 'production'
        ? process.env.DOMAIN_API_TIKTOKSHOP_PRODUCT
        : process.env.DOMAIN_API_TIKTOKSHOP_SANBOX;

    if (!domain) {
      throw new Error('API domain is not configured');
    }

    // Construct Axios config
    const config: AxiosRequestConfig = {
      method: method.toLowerCase() as any,
      url: `${domain}/api/products/202312/${url}`, // ✅ FIXED: Đường dẫn API đúng
      headers: {
        'Content-Type': 'application/json',
        'x-tts-access-token': tiktok_access_token,
      },
      params: requestParams,
      data: method.toUpperCase() !== 'GET' ? data : undefined,
    };

    console.log('API Call config:', {
      method: config.method,
      url: config.url,
      hasToken: !!tiktok_access_token,
      hasCipher: !!cipher_shop,
    });

    const response: AxiosResponse<T> = await this.httpService.axiosRef(config);
    return response.data;

  } catch (error) {
    console.error('API Call Error:', {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      url: error.config?.url,
    });

    // Clear cache on authentication error
    if (error.response?.status === 401) {
      await this.cacheManager.del('tiktok_access_token');
      await this.cacheManager.del('cipher_shop');
    }

    throw new HttpException(
      {
        message: error.response?.data?.message || error.message,
        details: error.response?.data,
      },
      error.response?.status || 500,
    );
  }
}}