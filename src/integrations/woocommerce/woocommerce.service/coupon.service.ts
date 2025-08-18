import { Inject, Injectable } from '@nestjs/common'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

import { CreateCouponDto } from './../../../common/dto/woocomercedto/create-coupon.dto'

@Injectable()
export class CouponService {
  constructor(
        @Inject('WOOCOMMERCE_API_INSTANCE')
        private readonly wooApi: WooCommerceRestApi, // Thay thế bằng kiểu chính xác nếu có
  ) {}

  async createCoupon(CreateCouponDto: CreateCouponDto) {
    try {
      const response = await this.wooApi.post('coupons', CreateCouponDto)
      return response.data
    }
    catch (error) {
      throw new Error(`Lỗi khi tạo coupon: ${error.message}`)
    }
  }
}
