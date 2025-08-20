import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import { AuthModule } from '~/modules/auth/auth.module'
import { WOOCOMMERCE_API_INSTANCE } from '../constants'
import { CouponController } from './woocommerce.controller/coupon.controller'
import { ProductController } from './woocommerce.controller/product.controller'
import { CouponService } from './woocommerce.service/coupon.service'

import { ProductService } from './woocommerce.service/product.service'

@Module({
  imports: [AuthModule],
  controllers: [/// khai báo controller ở đây
    ProductController,
    CouponController,
  ],
  providers: [
    {
      provide: WOOCOMMERCE_API_INSTANCE,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const url = configService.get('WOOCOMMERCE_URL') || process.env.WOOCOMMERCE_URL
        const version = configService.get('WOOCOMMERCE_API_VERSION') || process.env.WOOCOMMERCE_API_VERSION || 'wc/v3'
        console.log('🚀 WooCommerce API URL:', `${url}/${version}`)

        return new WooCommerceRestApi({
          url,
          consumerKey: configService.get('WOOCOMMERCE_KEY'),
          consumerSecret: configService.get('WOOCOMMERCE_SECRET'),
          version,
          queryStringAuth: configService.get('WOOCOMMERCE_QUERY_STRING_AUTH') === 'true',
        })
      },
    },
    ProductService,
    CouponService,
  ],
  // Nhớ export service để các module khác có thể dùng
  exports: [ProductService, CouponService, WOOCOMMERCE_API_INSTANCE],

})
export class WooCommerceModule {}
