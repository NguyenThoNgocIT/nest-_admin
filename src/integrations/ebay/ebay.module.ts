import { Module } from '@nestjs/common'

import { ConfigService } from '@nestjs/config'
import EbayAuthToken from 'ebay-oauth-nodejs-client'
import { EBAY_API_INSTANCE } from '../constants'

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: EBAY_API_INSTANCE,
      inject: [ConfigService],
      // Khởi tạo EbayAuthToken với các thông tin từ ConfigService hoặc biến môi trường
      useFactory: (ConfigService: ConfigService) => {
        return new EbayAuthToken({
          clientId: ConfigService.get('EBAY_CLIENT_ID') || process.env.EBAY_CLIENT_ID,
          clientSecret: ConfigService.get('EBAY_CLIENT_SECRET') || process.env.EBAY_CLIENT_SECRET,
          redirectUri: ConfigService.get('EBAY_REDIRECT_URI') || process.env.EBAY_REDIRECT_URI,

        })
      },
    },
  ],
  // Nhớ export EBAY_API_INSTANCE để các module khác có thể dùng
  exports: [EBAY_API_INSTANCE],
})
export class EbayModule {

}
