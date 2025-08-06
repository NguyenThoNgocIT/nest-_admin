import { BadRequestException, Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Public } from '../auth/decorators/public.decorator'/// sau khi kiểm tra fix lại đc xác thực thì xoá dòng này đi k nên để
import { OdooPartnerData, OdooService } from './odoo.service'

@ApiTags('Odoo')
@Controller('odoo')
export class OdooController {
  constructor(private readonly odooService: OdooService) {}

  @Get('test-api-key')
  @Public()
  @ApiOperation({ summary: 'Kiểm tra lấy API key từ Odoo' })
  async testApiKey() {
    try {
      const apiKey = await this.odooService.getApiKey()
      return { ok: true, apiKey }
    }
    catch (err) {
      return { ok: false, error: err.message }
    }
  }

  @Get('partner-by-email')
  @ApiOperation({ summary: 'Tìm partner theo email' })
  async getPartner(@Query('email') email: string) {
    if (!email)
      throw new BadRequestException('Email là bắt buộc.')
    try {
      const partner = await this.odooService.findPartnerByEmail(email)
      return { ok: true, partner }
    }
    catch (err) {
      return { ok: false, error: err.message }
    }
  }

  @Post('sync-partner')
  @ApiOperation({ summary: 'Tạo hoặc cập nhật partner trong Odoo' })
  async syncPartner(@Body() data: OdooPartnerData) {
    if (!data.name)
      throw new BadRequestException('Tên là bắt buộc.')
    try {
      const result = await this.odooService.syncPartner(data)
      return { ok: true, result }
    }
    catch (err) {
      return { ok: false, error: err.message }
    }
  }

  @Post('deactivate-partner')
  @ApiOperation({ summary: 'Vô hiệu hóa partner theo email' })
  async deactivatePartner(@Body('email') email: string) {
    if (!email)
      throw new BadRequestException('Email là bắt buộc.')
    try {
      await this.odooService.deactivatePartnerByEmail(email)
      return { ok: true }
    }
    catch (err) {
      return { ok: false, error: err.message }
    }
  }
}
