import { Controller, Get, Query, Res, Injectable, BadRequestException, Post, Body } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { Public } from '~/modules/auth/decorators/public.decorator';
import { AuthTikTokShopService } from '../tiktok.services/auth.service';

@Injectable()
export class TikTokOAuthService {
    constructor(private configService: ConfigService) {}

    generateAuthUrl(): string {
        const appKey = this.configService.get<string>('TIKTOK_SHOP_API_KEY');
        const redirectUri =this.configService.get<string>('TIKTOK_OAUTH_REDIRECT_URI');
        const state = Math.random().toString(36).substring(2, 15); // Random state
        
        // TikTok Shop OAuth URL
        const authUrl = `https://services.tiktokshop.com/open/authorize?` +
            `app_key=${appKey}&` +
            `state=${state}&` +
            `redirect_uri=${redirectUri}`;
            
        console.log('Generated OAuth URL:', authUrl);
        return authUrl;
    }
}

@Controller('oauth')
@Public()
export class TikTokOAuthController {
    constructor(
        private oauthService: TikTokOAuthService,
        private oauthtiktokService: AuthTikTokShopService,
        private configService: ConfigService
    ) {}

    // Bước 1: Redirect đến TikTok để authorize
    @Get('tiktok/authorize')
    redirectToTikTok(@Res() res: Response) {
        const authUrl = this.oauthService.generateAuthUrl();
        return res.redirect(authUrl);
    }
@Post('access-token')
async handle(
  @Body('code') code: string,
) {
  if (!code) {
    return {
      success: false,
      message: 'Authorization code is missing in the request body.'
    };
  }

  try {
    const tokenData = await this.oauthtiktokService.getAccessToken(code);
    return {
      success: true,
      message: 'Authorization successful and token obtained.',
      tokens: tokenData
    };
  } catch (e: any) {
    // Xử lý lỗi từ dịch vụ lấy token
    return {
      success: false,
      message: e.message || 'Failed to exchange authorization code.',
    };
  }
}

@Get('tiktok/callback')
async handleCallback(
  @Query('app_key') appKey: string,
  @Query('code') code: string,
  @Query('locale') locale: string,
  @Query('shop_region') shopRegion: string,
  @Query('state') state: string,
) {
  // TODO: So sánh state nhận được với state đã lưu để xác thực
  console.log('Received callback from TikTok:', { appKey, code, locale, shopRegion, state });

  // Kiểm tra xem code có tồn tại không
  if (!code) {
    return {
      success: false,
      message: 'Authorization code is missing.'
    };
  }

  try {
    // Gọi service để trao đổi mã code lấy access token
    const tokenData = await this.oauthtiktokService.getAccessToken(code);

    // TODO: lưu tokenData.access_token, tokenData.refresh_token, expire_in vào DB
    // TODO: trả về thông báo hoặc chuyển hướng người dùng đến trang thành công
    
    return {
      success: true,
      message: 'Authorization successful and token obtained.',
      tokens: tokenData
    };
  } catch (e: any) {
    return {
      success: false,
      message: e.message || 'Failed to exchange authorization code',
    };
  }
}
    // Helper endpoint để check current auth code
    @Get('tiktok/check')
    checkAuthCode() {
        const authCode = this.configService.get<string>('TIKTOK_SHOP_AUTH_CODE');
        const appKey = this.configService.get<string>('TIKTOK_SHOP_API_KEY');
        
        return {
            has_auth_code: !!authCode,
            auth_code_length: authCode ? authCode.length : 0,
            auth_code_preview: authCode ? authCode.substring(0, 10) + '...' : 'Not set',
            has_app_key: !!appKey,
            message: authCode ? 'Auth code is configured' : 'Need to run OAuth flow first'
        };
    }
    // Endpoint mới để test lấy access token
    @Get('test-token')
    async testTokenFlow() {
        const authCode = this.configService.get<string>('TIKTOK_SHOP_AUTH_CODE');

        if (!authCode) {
            return {
                success: false,
                message: 'No authorization code found in .env. Please run the OAuth flow first.'
            };
        }

        try {
            const tokenData = await this.oauthtiktokService.getAccessToken(authCode);
            // Bạn nên lưu token này vào cơ sở dữ liệu để sử dụng lâu dài
            console.log('Access Token & Refresh Token:', tokenData);
            return {
                success: true,
                message: 'Successfully exchanged authorization code for access and refresh tokens.',
                data: tokenData
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
}