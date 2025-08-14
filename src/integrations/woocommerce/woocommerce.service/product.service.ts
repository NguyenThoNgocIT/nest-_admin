import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import { WOOCOMMERCE_API_INSTANCE } from '../constants'

@Injectable()
export class ProductService {
  constructor(
    @Inject(WOOCOMMERCE_API_INSTANCE)
    private readonly wooApi: WooCommerceRestApi,
  ) {}

  async findAll(query: any = {}) {
    try {
      const response = await this.wooApi.get('products', {
        ...query, // Truyền tham số query từ client
        per_page: query.per_page || 10, // Mặc định 10 sản phẩm mỗi trang
        page: query.page || 1, // Mặc định trang 1
      })
      console.log('WooCommerce Products:', response.data) // Ghi log danh sách sản phẩm để kiểm tra
      return {
        data: response.data,
        total: Number.parseInt(response.headers['x-wp-total'], 10), // Tổng số sản phẩm
        totalPages: Number.parseInt(response.headers['x-wp-totalpages'], 10), // Tổng số trang
      }
    }
    catch (error) {
      this.handleError(error)
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.wooApi.get(`products/${id}`)
      console.log('WooCommerce Product:', response.data)
      return response.data
    }
    catch (error) {
      this.handleError(error)
    }
  }

  private handleError(error: any) {
    const errorData = error.response?.data || { message: 'Lỗi máy chủ nội bộ' }
    const status = error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR

    // Ghi log chi tiết lỗi để debug
    console.error('WooCommerce API Error:', {
      message: errorData.message,
      code: errorData.code, // Mã lỗi từ WooCommerce, ví dụ: woocommerce_rest_term_invalid
      status,
      details: errorData.data,
    })

    throw new HttpException(
      {
        message: errorData.message,
        code: errorData.code,
        status,
      },
      status,
    )
  }
}
