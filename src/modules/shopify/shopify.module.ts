import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ShopifyRestClientProvider } from '~/integrations/shopify/shopify-rest-client.provider';
import { CustomerShopifyController } from '~/integrations/shopify/shopify.controllers/customer.controller';
import { ProductShopifyController } from '~/integrations/shopify/shopify.controllers/product.controller';
import { CustomerShopifyService } from '~/integrations/shopify/shopify.services/customer.service';
import { ProductShopifyService } from '~/integrations/shopify/shopify.services/product.service';

@Module({
  imports: [ConfigModule, ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),
  ],
  controllers: [
    ProductShopifyController,
    CustomerShopifyController
  ],
  providers: [
    ShopifyRestClientProvider,
    ProductShopifyService,
    CustomerShopifyService,
  ],
  exports: [ProductShopifyService],
})
export class ShopifyModule { }