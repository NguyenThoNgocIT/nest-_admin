import { Injectable } from "@nestjs/common"
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

    async getBrands(data) {
        const url = `${process.env.GET_BRANDS as string}`
        let res = await this.callAPiService.CallApi("GET", url, "", "", data)
        return res
    }






}