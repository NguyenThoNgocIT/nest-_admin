import { Inject, Injectable } from '@nestjs/common';
import { RestClient } from '@shopify/shopify-api';
import { CreateCustomerDto, UpdateCustomerDto } from '~/common/dto/shopifyDto/customer.dto';

@Injectable()
export class CustomerShopifyService {
  constructor(@Inject('SHOPIFY_REST_CLIENT') private readonly restClient: RestClient) { }

  // Lấy danh sách sản phẩm
  async getListCustomer() {
    try {
      const response = await this.restClient.get({
        path: 'customers',
      });
      console.log("response",response)
      return response.body.customers;
    } catch (error) {
      throw new Error(`Failed to fetch products: ${error.message}`);
    }
  }

  // Lấy sản phẩm theo ID
  async getProductById(id: number) {
    try {
      const response = await this.restClient.get({
        path: `products/${id}`,
      });
      return response.body.product;
    } catch (error) {
      throw new Error(`Failed to fetch product ${id}: ${error.message}`);
    }
  }

  async createCustomer(customerData: CreateCustomerDto) {
    try {
        const payload = {
      customer: {
        ...customerData,
      },
    };
    console.log('payload',payload)
      const response = await this.restClient.post({
        path: 'customers',
        data:  payload ,
      });
      return response.body.customer;
    } catch (error) {
      throw new Error(`Failed to create customer: ${error.message}`);
    }
  }

 async updateCustomer(customerId: number, customerData: UpdateCustomerDto) {
    try {
      const response = await this.restClient.put({
        path: `customers/${customerId}`,
        data: { customer: customerData },
      });
      return response.body.customer;
    } catch (error) {
      throw new Error(`Failed to update customer: ${error.message}`);
    }
  }

  // Xóa sản phẩm
  async deleteProduct(id: number) {
    try {
      await this.restClient.delete({
        path: `products/${id}`,
      });
      return { message: `Product ${id} deleted successfully` };
    } catch (error) {
      throw new Error(`Failed to delete product ${id}: ${error.message}`);
    }
  }
}
