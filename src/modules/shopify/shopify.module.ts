// shopify/shopify.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';

import { ShopifyRestClientProvider } from '~/integrations/shopify/shopify-rest-client.provider';
import { CustomerShopifyController } from '~/integrations/shopify/shopify.controllers/customer.controller';
import { ProductShopifyController } from '~/integrations/shopify/shopify.controllers/product.controller';
import { CustomerShopifyService } from '~/integrations/shopify/shopify.services/customer.service';
import { ProductShopifyService } from '~/integrations/shopify/shopify.services/product.service';

import { SHOPIFY_PRODUCT_PREFIX, SHOPIFY_PRODUCT_QUEUE } from './constants';
import { JobController } from '~/integrations/shopify/job.controller';
import { ProductShopifyProcessor } from '~/integrations/shopify/shopify.processor/product.processor';

@Module({
  imports: [
    ConfigModule, 

    BullModule.registerQueueAsync({
      name: SHOPIFY_PRODUCT_QUEUE,
      useFactory: (configService: ConfigService) => ({
        redis: configService.get('redis'),
        prefix: SHOPIFY_PRODUCT_PREFIX, 
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [
    ProductShopifyController,
    CustomerShopifyController,
    
    JobController
  ],
  providers: [
    ShopifyRestClientProvider,
    ProductShopifyService,
    CustomerShopifyService,
    ProductShopifyProcessor
  ],
  exports: [
    ProductShopifyService,
  ],
})
export class ShopifyModule {}