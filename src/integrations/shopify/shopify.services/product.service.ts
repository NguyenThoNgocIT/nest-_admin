import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { GraphqlClient, RestClient } from '@shopify/shopify-api';
import { Cache } from 'cache-manager';

@Injectable()
export class ProductShopifyService {
  constructor(
    @Inject('SHOPIFY_REST_CLIENT') private readonly restClient: RestClient,
    @Inject('SHOPIFY_GRAPHQL_CLIENT') private readonly graphqlClient: GraphqlClient,

    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) { }
  // Lấy danh sách sản phẩm
  async getProducts() {
    const cacheKey = 'shopify_products';
    const cachedData = await this.cacheManager.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }
    try {
      const response = await this.restClient.get({
        path: 'products',
      });
      const products = response.body.products;
      await this.cacheManager.set(cacheKey, products, 10 * 1000);
      return products;
    } catch (error) {
      throw new Error(`Failed to fetch products: ${error.message}`);
    }
  }

  // Lấy sản phẩm theo ID
  async getProductById(id: number) {
    const cacheKey = `shopify_product_${id}`;
    const cachedData = await this.cacheManager.get(cacheKey);

    if (cachedData) {
      return cachedData;
    }

    try {
      const response = await this.restClient.get({
        path: `products/${id}`,
      });
      const product = response.body.product;
      await this.cacheManager.set(cacheKey, product, 10 * 1000);
      return product;
    } catch (error) {
      throw new Error(`Failed to fetch product ${id}: ${error.message}`);
    }
  }
  // Tạo sản phẩm mới bằng RestClient
  async createProductByRestClient(productData: any) {
    try {
      const response = await this.restClient.post({
        path: 'products',
        data: { product: productData },
      });
      const product = response.body.product;
      // Xóa cache danh sách sản phẩm để đảm bảo dữ liệu mới nhất
      await this.cacheManager.del('shopify_products');
      return product    } catch (error) {
      throw new Error(`Failed to create product: ${error.message}`);
    }
  }
  // Tạo sản phẩm mới bằng GraphqlClient
async createProductByGraphqlClient(productData: any) {
    try {
      // Step 1: Create product
      const productMutation = `
        mutation productCreate($input: ProductInput!) {
          productCreate(input: $input) {
            product {
              id
              title
            }
            userErrors {
              field
              message
            }
          }
        }
      `;
      const productVariables = {
        input: {
          title: productData.title,
          descriptionHtml: productData.body_html || 'No description',
          productType: productData.product_type || 'Apparel',
          vendor: 'Printify',
        },
      };
      const productResponse = await this.graphqlClient.request(productMutation, { variables: productVariables });
      console.log('Product create response:', JSON.stringify(productResponse, null, 2));
      const productCreateResult = productResponse.data?.productCreate;
      if (!productCreateResult) {
        throw new Error('Product create failed: No response data');
      }
      if (productCreateResult.userErrors.length > 0) {
        throw new Error(`Product create errors: ${JSON.stringify(productCreateResult.userErrors)}`);
      }
      const productId = productCreateResult.product?.id;
      if (!productId) {
        throw new Error('Product creation failed: No product ID returned');
      }



      // Step 3: Create images
      if (productData.images?.length > 0) {
        const mediaMutation = `
          mutation productCreateMedia($productId: ID!, $media: [CreateMediaInput!]!) {
            productCreateMedia(productId: $productId, media: $media) {
              media {
                id
              }
              userErrors {
                field
                message
              }
            }
          }
        `;
        const mediaVariables = {
          productId,
          media: productData.images.map(img => ({
            originalSource: img.src,
            mediaContentType: 'IMAGE',
          })),
        };
        const mediaResponse = await this.graphqlClient.request(mediaMutation, { variables: mediaVariables });
        console.log('Media create response:', JSON.stringify(mediaResponse, null, 2));
        const mediaResult = mediaResponse.data?.productCreateMedia;
        if (!mediaResult) {
          throw new Error('Media create failed: No response data');
        }
        if (mediaResult.userErrors.length > 0) {
          throw new Error(`Media errors: ${JSON.stringify(mediaResult.userErrors)}`);
        }
      }

      await this.cacheManager.del('shopify_products');
      return { id: productId };
    } catch (error) {
      console.error('createProduct error:', error.message, { productData });
      throw error;
    }
  }
  // Cập nhật sản phẩm
  async updateProduct(id: number, productData: any) {
    try {
      const response = await this.restClient.put({
        path: `products/${id}`,
        data: { product: productData },
      });
      const product = response.body.product;
      // Xóa cache cho sản phẩm cụ thể và danh sách sản phẩm
      await Promise.all([
        this.cacheManager.del(`shopify_product_${id}`),
        this.cacheManager.del('shopify_products'),
      ]);
      return product;
    } catch (error) {
      throw new Error(`Failed to update product ${id}: ${error.message}`);
    }
  }

  // Xóa sản phẩm
  async deleteProduct(id: number) {
    try {
      await this.restClient.delete({
        path: `products/${id}`,
      });
      // Xóa cache cho sản phẩm cụ thể và danh sách sản phẩm
      await Promise.all([
        this.cacheManager.del(`shopify_product_${id}`),
        this.cacheManager.del('shopify_products'),
      ]);
      return { message: `Product ${id} deleted successfully` };
    } catch (error) {
      throw new Error(`Failed to delete product ${id}: ${error.message}`);
    }
  }
  async getShopInfo() {
    try {
      const response = await this.restClient.get({
        path: 'shop',
      });
      return response.body; // { shop: {...} }
    } catch (error) {
      console.error('Error fetching shop info:', error);
      throw error;
    }
  }
}
