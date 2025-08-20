import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard' // <-- Import Guard
import { ProductService } from '../woocommerce.service/product.service'

@ApiTags('Integrations | WooCommerce - Products')
@ApiBearerAuth('access-token') // <-- Thêm vào Swagger để hiển thị nút nhập token
@UseGuards(JwtAuthGuard) // <-- ÁP DỤNG GUARD Ở ĐÂY
@Controller('integrations/woocommerce')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('products')
  @ApiOperation({ summary: 'Lấy danh sách sản phẩm' })
  findAll(@Query() query: any) { // Dùng kiểu any thay vì DTO
    return this.productService.findAll(query) // Truyền trực tiếp các tham số query
  }

  // ... các route khác cũng sẽ được bảo vệ
}
