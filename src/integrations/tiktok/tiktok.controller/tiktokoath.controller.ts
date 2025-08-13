import { Controller, Get, Query, Res, Injectable, BadRequestException, Post, Body, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { Public } from '~/modules/auth/decorators/public.decorator';
import { AuthTikTokShopService } from '../tiktok.services/auth.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { generateSignature } from '~/common';

@Controller('oauth')
@Public()
export class TikTokOAuthController {
    constructor(
        private oauthtiktokService: AuthTikTokShopService,
        private configService: ConfigService,
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    ) { }

    @Get('tiktok/authorize')
    redirectToTikTok(@Res() res: Response) {
        try {
            const authUrl = this.oauthtiktokService.generateAuthUrl();
            return res.redirect(authUrl);
        } catch (error) {
            throw new HttpException(`Failed to generate auth URL: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Endpoint POST để lấy access token (nếu cần)
    @Post('access-token')
    async handle(@Body('code') code: string) {
        if (!code) {
            throw new HttpException('Authorization code is missing in the request body.', HttpStatus.BAD_REQUEST);
        }

        try {
            const tokenData = await this.oauthtiktokService.getAccessToken(code);
            return {
                success: true,
                message: 'Authorization successful and token obtained.',
                tokens: tokenData,
            };
        } catch (error) {
            throw new HttpException(
                `Failed to exchange authorization code: ${error.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
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
        console.log('Received callback from TikTok:', { appKey, code, locale, shopRegion, state });

        if (!code) {
            throw new HttpException('Authorization code is missing.', HttpStatus.BAD_REQUEST);
        }

        const expectedAppKey = this.configService.get<string>('TIKTOK_SHOP_API_KEY');
        if (appKey !== expectedAppKey) {
            throw new HttpException('Invalid app_key.', HttpStatus.BAD_REQUEST);
        }

        try {
            const tokenData = await this.oauthtiktokService.getAccessToken(code);

            // Lưu token vào cache
            await this.cacheManager.set('tiktok_access_token', tokenData.access_token, 86400); // 24 giờ
      await this.cacheManager.set('access_token_expire_in', tokenData.access_token_expire_in, 86400);
      await this.cacheManager.set('refresh_token', tokenData.refresh_token, 86400);
            console.log('✅ Token saved to cache:', {
                access_token: tokenData.access_token,
                access_token_expire_in: tokenData.access_token_expire_in,
                refresh_token: tokenData.refresh_token,
            });

            return {
                success: true,
                message: 'Authorization successful and token obtained.',
                tokens: tokenData,
            };
        } catch (error) {
            console.error('Failed to exchange code:', error);
            throw new HttpException(
                `Failed to exchange authorization code: ${error.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
    // Endpoint mới để test lấy access token
    // Test trong controller
@Get('test-signature')
async testSignature() {
    const params = {
        app_key: '6h5s4qm60s278',
        timestamp: Math.floor(Date.now() / 1000)
    };
    
    const signature = generateSignature(
        params, 
        null, 
        '/authorization/202309/shops'
    );
    
    return {
        params,
        signature,
        stringToSign: 'check console logs'
    };
}
}