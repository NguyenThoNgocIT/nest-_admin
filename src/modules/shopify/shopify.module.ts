import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ShopifyRestClientProvider } from '~/integrations/shopify/shopify-rest-client.provider';
import { ProductShopifyController } from '~/integrations/shopify/shopify.controllers/product.conteroller';
import { ProductShopifyService } from '~/integrations/shopify/shopify.services/product.service';

@Module({
  imports: [ConfigModule],
  controllers: [ProductShopifyController],
  providers: [ProductShopifyService,ShopifyRestClientProvider],
  exports: [ProductShopifyService],
})
export class ShopifyModule {}