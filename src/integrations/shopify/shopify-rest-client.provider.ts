import { Module, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api';
import '@shopify/shopify-api/adapters/node';

export const ShopifyRestClientProvider: Provider = {
  provide: 'SHOPIFY_REST_CLIENT',
  useFactory: (configService: ConfigService) => {
    const shop = configService.get<string>('SHOPIFY_SHOP_NAME');
    const accessToken = configService.get<string>('SHOPIFY_API_PASSWORD');
    const apiKey = configService.get<string>('SHOPIFY_API_KEY');
    const apiSecret = configService.get<string>('SHOPIFY_API_SECRET');
    console.log('SHOPIFY_API_KEY:', apiKey);
    console.log('SHOPIFY_API_SECRET:', apiSecret);
    console.log('SHOPIFY_API_PASSWORD:', accessToken);
    console.log('SHOPIFY_SHOP_NAME:', shop);
    const shopify = shopifyApi({
      apiKey,
      apiSecretKey: apiSecret,
      // scopes: ['read_products', 'write_products'],
      hostName: 'localhost:3000',
      apiVersion: LATEST_API_VERSION,
      isCustomStoreApp: true,
      adminApiAccessToken: accessToken,
      isEmbeddedApp: false,
    });

    // Tạo session cho custom app
    const session = shopify.session.customAppSession(shop);
    session.accessToken = accessToken;

    const restClient = new shopify.clients.Rest({ session });

    console.log('Created RestClient successfully');

    return restClient;
  },
  inject: [ConfigService],
};