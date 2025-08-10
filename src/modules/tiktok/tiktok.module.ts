import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ProductTiktokController } from "~/integrations/tiktok/tiktok.controller/product.controller";
import { AuthTikTokShopService } from "~/integrations/tiktok/tiktok.services/auth.service";
import { ProductTiktokService } from "~/integrations/tiktok/tiktok.services/product.service";
import { CallAPiService } from "~/service/callApi/callAPi.service";

@Module({
  imports: [HttpModule], 
  controllers: [ProductTiktokController],
  providers: [
    ProductTiktokService,
    CallAPiService,
    AuthTikTokShopService, // <-- Thêm provider này vào đây

  ], 
  exports: [ProductTiktokService], 
})
export class TiktokModule {}