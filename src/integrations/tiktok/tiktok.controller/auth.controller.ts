// import { Controller, Get, Post, Body } from '@nestjs/common';
// import { AuthTikTokShopService } from '../tiktok.services/auth.service';
// import { Public } from '~/modules/auth/decorators/public.decorator';
// import { CallApiService } from '~/service/callApi/callAPi.service';

// @Controller('test')
// @Public() // Bỏ qua authentication để test
// export class AuthTestController {
//     constructor(
//         private readonly authService: AuthTikTokShopService,
//         private readonly callApiService: CallApiService,
//     ) {}

//     @Get('token')
//     async testGetToken() {
//         try {
//             const result = await this.authService.getAccessToken();
//             return {
//                 success: true,
//                 message: 'Token retrieved successfully',
//                 data: result
//             };
//         } catch (error) {
//             return {
//                 success: false,
//                 message: error.message,
//                 error: error
//             };
//         }
//     }

//     @Get('shop')
//     async testGetShop() {
//         try {
//             const result = await this.authService.getAuthShop();
//             return {
//                 success: true,
//                 message: 'Shop info retrieved successfully',
//                 data: result
//             };
//         } catch (error) {
//             return {
//                 success: false,
//                 message: error.message,
//                 error: error
//             };
//         }
//     }

//     @Get('products')
//     async testGetProducts() {
//         try {
//             // Test API call thông qua CallAPiService
//             const result = await this.callApiService.CallApi(
//                 'GET',
//                 '/product/202309/products',
//                 null,
//                 null,
//                 { page_size: 10, page_number: 1 }
//             );

//             return {
//                 success: true,
//                 message: 'Products retrieved successfully',
//                 data: result
//             };
//         } catch (error) {
//             return {
//                 success: false,
//                 message: error.message,
//                 error: error
//             };
//         }
//     }

//     @Post('check-config')
//     async checkConfig() {
//         return {
//             hasApiKey: !!process.env.TIKTOK_SHOP_API_KEY,
//             hasSecret: !!process.env.TIKTOK_SHOP_SECRET,
//             hasAuthCode: !!process.env.TIKTOK_SHOP_AUTH_CODE,
//             hasApiUrl: !!process.env.TIKTOK_SHOP_API_URL,
//             nodeEnv: process.env.NODE_ENV,
//             apiUrl: process.env.TIKTOK_SHOP_API_URL,
//             domain: process.env.NODE_ENV === 'production'
//                 ? process.env.DOMAIN_API_TIKTOKSHOP_PRODUCT
//                 : process.env.DOMAIN_API_TIKTOKSHOP_SANBOX
//         };
//     }
// }
import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Public } from '~/modules/auth/decorators/public.decorator'

@Controller('region')
@Public()
export class RegionCheckController {
  constructor(private configService: ConfigService) {}

  @Get('check')
  checkRegion() {
    const supportedRegions = [
      'US',
      'GB',
      'ID',
      'MY',
      'TH',
      'VN',
      'PH',
      'JP',
      'SG',
      'ES',
      'IE',
      'DE',
      'FR',
      'IT',
      'BR',
      'MX',
    ]

    const supportedCountries = [
      'United States',
      'United Kingdom',
      'Indonesia',
      'Malaysia',
      'Thailand',
      'Vietnam',
      'Philippines',
      'Japan',
      'Singapore',
      'Spain',
      'Ireland',
      'Germany',
      'France',
      'Italy',
      'Brazil',
      'Mexico',
    ]

    return {
      current_location: 'Da Nang, VN', // Từ user context
      is_supported: supportedRegions.includes('VN'),
      supported_regions: supportedRegions,
      supported_countries: supportedCountries,
      message: supportedRegions.includes('VN')
        ? 'Vietnam is supported! ✅'
        : 'Vietnam may not be fully supported yet ⚠️',
      recommendations: [
        'Check if your TikTok Shop account is registered in a supported region',
        'Try using a VPN to a supported country temporarily',
        'Contact TikTok Shop support to confirm regional availability',
        'Use sandbox environment for testing if available',
      ],
    }
  }

  @Get('oauth-urls')
  getOAuthUrls() {
    const appKey = this.configService.get<string>('TIKTOK_SHOP_API_KEY')

    // Different regional OAuth URLs
    const oauthUrls = {
      global: `https://services.tiktokshop.com/open/authorize?app_key=${appKey}&state=test&redirect_uri=http://localhost:7001/api/oauth/tiktok/callback`,

      // Regional specific URLs (if different)
      us: `https://us-services.tiktokshop.com/open/authorize?app_key=${appKey}&state=test&redirect_uri=http://localhost:7001/api/oauth/tiktok/callback`,

      uk: `https://uk-services.tiktokshop.com/open/authorize?app_key=${appKey}&state=test&redirect_uri=http://localhost:7001/api/oauth/tiktok/callback`,

      sea: `https://sea-services.tiktokshop.com/open/authorize?app_key=${appKey}&state=test&redirect_uri=http://localhost:7001/api/oauth/tiktok/callback`,
    }

    return {
      message: 'Try different regional OAuth URLs if global one doesn\'t work',
      urls: oauthUrls,
      instructions: [
        '1. Try the global URL first',
        '2. If region error, try the specific regional URL',
        '3. Make sure your TikTok Shop account region matches',
        '4. Contact support if none work',
      ],
    }
  }
}
