import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { AuthTikTokShopService } from "~/integrations/tiktok/tiktok.services/auth.service";
import { ProductTikTokController } from "~/integrations/tiktok/tiktok.controller/product.controller";
import { ProductTikTokService } from "~/integrations/tiktok/tiktok.services/product.service";
import { CallApiService } from "~/service/callApi/callAPi.service";
// import { AuthTestController } from "~/integrations/tiktok/tiktok.controller/auth.controller";
import { TikTokOAuthController } from "~/integrations/tiktok/tiktok.controller/tiktokoath.controller";

@Module({
  imports: [HttpModule], 
  controllers: [ProductTikTokController,TikTokOAuthController],
  providers: [
    ProductTikTokService,
    CallApiService,
    AuthTikTokShopService, 
  ], 
  exports: [ProductTikTokService], 
})
export class TiktokModule {}