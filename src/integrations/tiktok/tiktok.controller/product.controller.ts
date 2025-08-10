import { Body, Controller, Inject, Optional, Param, Post } from "@nestjs/common"
import { REQUEST } from "@nestjs/core"
import { ERR_CODE, IReqApp, MODULE_OPTIONS_PROVIDER } from "~/common"
import { ProductListzDto } from "~/common/dto/tiktokDto/product.dto"

import { ProductTiktokService } from "../tiktok.services/product.service"
import { UnAuthErr } from "~/common/error"
import { ApiBody, ApiTags } from "@nestjs/swagger"
import { Public } from "~/modules/auth/decorators/public.decorator"
@ApiTags('Sản phẩm tik tok')
@Controller('tiktok')
export class ProductTiktokController{
    constructor(
        @Inject(REQUEST) private readonly request: IReqApp,
        private readonly productTiktokService: ProductTiktokService, // Di chuyển lên trước @Optional
        // @Optional()
        // @Inject(MODULE_OPTIONS_PROVIDER)
        // private readonly db: PrismaService,
    ) {
        // super(request)
    }

    // @PermsGuard('USER.VIEW')
     @Public()
    @Post('user/products')
     @ApiBody({ type: ProductListzDto })
    async getProductsList(
        @Param() page_token: string,
        @Body() data: ProductListzDto
    ): Promise<any> {
         console.log('productTiktokService:', this.productTiktokService); // Debug log
        let syncProduct = await this.productTiktokService.getProductsList({ page_token }, data)
        if (syncProduct) {
            return syncProduct
        } else {
            throw new UnAuthErr(ERR_CODE.LIST_NOT_FOUND)
        }
    }

    // @PermsGuard('USER.VIEW')
    // @Post('user/products/:id`')
    // async updateProduct(
    //     @Param() product_id: string,
    //     @Body() data: createProductDto
    // ): Promise<any> {
    //     let updateProduct = await this.productTiktokService.updateProduct(product_id, data)
    //     if (updateProduct && updateProduct?.message == RES_CODE.SUCCESS) {
    //         return updateProduct
    //     } else {
    //         throw new UnAuthErr(ERR_CODE.LIST_NOT_FOUND)
    //     }
    // }

    // @PermsGuard('USER.VIEW')
    // @Post('products')
    // async removeProducts(
    //     @Body() product_ids: string[]
    // ): Promise<any> {
    //     let updateProduct = await this.productTiktokService.removeProduct(product_ids)
    //     if (updateProduct && updateProduct?.message == RES_CODE.SUCCESS) {
    //         return updateProduct
    //     } else {
    //         throw new UnAuthErr(ERR_CODE.LIST_NOT_FOUND)
    //     }
    // }
    // @PermsGuard('USER.VIEW')
    // @Post('duplicate-products`')
    // async dulicateProduct(
    //     @Body() data:
    // ): Promise<any> {
    //     let updateProduct = await this.productTiktokService.dulicateProduct()
    //     if (updateProduct && updateProduct?.message == RES_CODE.SUCCESS) {
    //         return updateProduct
    //     } else {
    //         throw new UnAuthErr(ERR_CODE.LIST_NOT_FOUND)
    //     }
    // }
    // @PermsGuard('USER.VIEW')
    // @Post('sync-product')
    // async syncProduct(
    //     @Body() { warehouse_id }: syncProductFromTIktok,
    // ): Promise<any> {
    //     let syncProduct = await this.productTiktokService.syncProduct(warehouse_id)
    //     if (syncProduct && syncProduct?.message == RES_CODE.SUCCESS) {
    //         return syncProduct
    //     } else {
    //         throw new UnAuthErr(ERR_CODE.LIST_NOT_FOUND)
    //     }
    // }
}