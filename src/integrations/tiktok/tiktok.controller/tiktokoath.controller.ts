import { Controller, Get, Query, Res, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { Public } from '~/modules/auth/decorators/public.decorator';

@Injectable()
export class TikTokOAuthService {
    constructor(private configService: ConfigService) {}

    generateAuthUrl(): string {
        const appKey = this.configService.get<string>('TIKTOK_SHOP_API_KEY');
        const redirectUri = encodeURIComponent('http://localhost:7001/api/oauth/tiktok/callback');
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
        private configService: ConfigService
    ) {}

    // Bước 1: Redirect đến TikTok để authorize
    @Get('tiktok/authorize')
    redirectToTikTok(@Res() res: Response) {
        const authUrl = this.oauthService.generateAuthUrl();
        return res.redirect(authUrl);
    }

    // Bước 2: TikTok sẽ redirect về đây với authorization code
    @Get('tiktok/callback')
    async handleCallback(
        @Query('code') code: string,
        @Query('state') state: string,
        @Query('error') error: string,
        @Res() res: Response
    ) {
        if (error) {
            return res.status(400).json({
                success: false,
                error: error,
                message: 'User denied authorization or other error occurred'
            });
        }

        if (!code) {
            return res.status(400).json({
                success: false,
                error: 'No authorization code received'
            });
        }

        console.log('✅ Authorization Code received:', code);
        console.log('State:', state);

        // Hiển thị code để bạn copy vào .env
        return res.json({
            success: true,
            message: 'Authorization successful! Copy this code to your .env file as TIKTOK_SHOP_AUTH_CODE',
            authorization_code: code,
            state: state,
            instructions: [
                '1. Copy the authorization_code above',
                '2. Add to your .env file: TIKTOK_SHOP_AUTH_CODE=' + code,
                '3. Restart your server',
                '4. Test with GET /api/test/token'
            ]
        });
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
}