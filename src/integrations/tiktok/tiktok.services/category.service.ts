import { Injectable } from "@nestjs/common"
import { getbrandsDto } from "~/common/dto/tiktokDto/caterory.dto"
import { CallApiService } from "~/service/callApi/callAPi.service"

@Injectable()
export class CategoryService {
    constructor(
        private readonly callAPiService: CallApiService,
    ) { }

    async getListings(data) {
        // const url = `${process.env.GET_CATEGORY as string}`
        const url = `${process.env.GET_CATEGORY as string}`
        let res = await this.callAPiService.CallApi("GET", url, "", "", data)
        return res
    }

    async getProductAttributes(category_id) {
        const url = `${process.env.GET_CATEGORY as string}/${category_id}/attributes`
        let res = await this.callAPiService.CallApi("GET", url, "", "", { category_id })
        return res
    }

    async getBrands(data: getbrandsDto) {
        const url = `${process.env.GET_BRANDS as string}`
        const queryParams: Record<string, string | number | boolean> = {
            page_size: data.page_size ?? 100,
        };

        let res = await this.callAPiService.CallApi("GET", url, "", "", queryParams)
        return res
    }
}