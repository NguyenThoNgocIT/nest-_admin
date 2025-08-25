// shopify/shopify.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';

import { ShopifyProviders, ShopifyRestClientProvider } from '~/integrations/shopify/shopify-rest-client.provider';
import { CustomerShopifyController } from '~/integrations/shopify/shopify.controllers/customer.controller';
import { ProductMapping, ProductShopifyController } from '~/integrations/shopify/shopify.controllers/product.controller';
import { CustomerShopifyService } from '~/integrations/shopify/shopify.services/customer.service';
import { ProductShopifyService } from '~/integrations/shopify/shopify.services/product.service';

import { SHOPIFY_PRODUCT_PREFIX, SHOPIFY_PRODUCT_QUEUE } from './constants';
import { JobController } from '~/integrations/shopify/job.controller';
import { ProductShopifyProcessor } from '~/integrations/shopify/shopify.processor/product.processor';
import { PrintifyService } from '~/shared/printify/printify.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([ProductMapping]),
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
    ShopifyProviders,
    ProductShopifyService,
    CustomerShopifyService,
    ProductShopifyProcessor,
    PrintifyService
  ],
  exports: [
    ProductShopifyService,
  ],
})
export class ShopifyModule { }