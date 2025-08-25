import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { shopifyApi, LATEST_API_VERSION, GraphqlClient } from '@shopify/shopify-api';
import '@shopify/shopify-api/adapters/node';

// Tạo một hàm chung để khởi tạo Shopify và Session
const createShopifyAndSession = (configService: ConfigService) => {
  const shop = configService.get<string>('SHOPIFY_SHOP_NAME');
  const accessToken = configService.get<string>('SHOPIFY_API_PASSWORD');
  const apiKey = configService.get<string>('SHOPIFY_API_KEY');
  const apiSecret = configService.get<string>('SHOPIFY_API_SECRET');

  const shopify = shopifyApi({
    apiKey,
    apiSecretKey: apiSecret,
    hostName: 'localhost:3000',
    apiVersion: LATEST_API_VERSION,
    isCustomStoreApp: true,
    adminApiAccessToken: accessToken,
    isEmbeddedApp: false,
  });

  const session = shopify.session.customAppSession(shop);
  session.accessToken = accessToken;

  return { shopify, session };
};

export const ShopifyRestClientProvider: Provider = {
  provide: 'SHOPIFY_REST_CLIENT',
  useFactory: (configService: ConfigService) => {
    const { shopify, session } = createShopifyAndSession(configService);
    return new shopify.clients.Rest({ session });
  },
  inject: [ConfigService],
};

export const ShopifyProviders: Provider = {
  provide: 'SHOPIFY_GRAPHQL_CLIENT',
  useFactory: (configService: ConfigService) => {
        const { shopify, session } = createShopifyAndSession(configService);
    return new shopify.clients.Graphql({
            session,
        });
  },
  inject: [ConfigService],
};