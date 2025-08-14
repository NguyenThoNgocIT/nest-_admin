import { Controller, Get, Inject,  Param } from "@nestjs/common"
import { REQUEST } from "@nestjs/core"
import { ERR_CODE, IReqApp } from "~/common"
import { getbrandsDto, getListingsDto } from "~/common/dto/tiktokDto/caterory.dto"
import { UnAuthErr } from "~/common/error"
import { Public } from "~/modules/auth/decorators/public.decorator"
import { ControllerBase } from "~/service/base/base.controller"
import { CategoryService } from "../tiktok.services/category.service"

@Controller('tiktok/categories')
export class CategoryTiktokController extends ControllerBase {
  constructor(
    @Inject(REQUEST) request: IReqApp,
    private categoryService: CategoryService
  ) {
    super(request);
  }

  @Public()
  @Get('list') 
  async getOrder(
    @Param() data: getListingsDto
  ): Promise<any> {
    let list = await this.categoryService.getListings(data);
    if (list) {
      return list;
    } else {
      throw new UnAuthErr(ERR_CODE.LIST_NOT_FOUND);
    }
  }

  @Get('attributes')
  async getProductAttributes(
    @Param() category_id: string
  ): Promise<any> {
    let list = await this.categoryService.getProductAttributes(category_id);
    if (list) {
      return list;
    } else {
      throw new UnAuthErr(ERR_CODE.LIST_NOT_FOUND);
    }
  }

  @Get('brands') 
  async getBrands(
    @Param() data: getbrandsDto
  ): Promise<any> {
    let list = await this.categoryService.getBrands(data);
    if (list) {
      return list;
    } else {
      throw new UnAuthErr(ERR_CODE.LIST_NOT_FOUND);
    }
  }
}