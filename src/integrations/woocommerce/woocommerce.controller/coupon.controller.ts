import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard' // Import Guard
import { CreateCouponDto } from '../../../common/dto/woocomercedto/create-coupon.dto'
import { CouponService } from '../woocommerce.service/coupon.service'

@ApiTags('Coupons')
@ApiBearerAuth('access-token') // Thêm vào Swagger để hiển thị nút nhập token
@UseGuards(JwtAuthGuard) // Áp dụng Guard để bảo vệ các route trong controller này
@Controller('coupons')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  // Các route sẽ được định nghĩa ở đây
  // Ví dụ: @Post() để tạo coupon, @Get() để lấy danh sách coupon, v.v.
  @Post('create')
  async createCoupon(@Body() createCouponDto: CreateCouponDto) {
    return this.couponService.createCoupon(createCouponDto)
  }
}
