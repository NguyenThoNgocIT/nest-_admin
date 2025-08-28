import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { Public } from '~/modules/auth/decorators/public.decorator';
import { ApiBody } from '@nestjs/swagger';
import { CustomerShopifyService } from '../shopify.services/customer.service';
import { CreateCustomerDto, UpdateCustomerDto } from '~/common/dto/shopifyDto/customer.dto';

@Controller('shopify/customers')
export class CustomerShopifyController {
  constructor(private readonly customerService: CustomerShopifyService) { }

  // Lấy danh sách khách hàng
  @Public()
  @Get()
  async getListCustomers() {
    return await this.customerService.getListCustomer();
  }

  // Lấy sản phẩm theo ID
  @Public()
  @Get('products/:id')
  async getProductById(@Param('id', ParseIntPipe) id: number) {
    return await this.customerService.getProductById(id);
  }

  // Tạo sản phẩm mới
  @Public()
  @Post()
  @ApiBody({ type: CreateCustomerDto })
  async createProduct(@Body() customerData: any) {
      console.log('DTO nhận từ client:', customerData);
    return await this.customerService.createCustomer(customerData);
  }

  // Cập nhật sản phẩm
  @Put('/:id')
  async updateProduct(@Param('id', ParseIntPipe) id: number, @Body() customertData: UpdateCustomerDto) {
    return await this.customerService.updateCustomer(id, customertData);
  }

  // Xóa sản phẩm
  @Public()
  @Delete('products/:id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return await this.customerService.deleteProduct(id);
  }
}