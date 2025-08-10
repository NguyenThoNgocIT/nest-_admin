import { HttpService } from "@nestjs/axios";
import { HttpException, Injectable } from "@nestjs/common";
import { CallAPiService } from "~/service/callApi/callAPi.service";
const xlsx = require('xlsx');


@Injectable()
export class ProductTiktokService {
    constructor(
        private readonly callAPiService: CallAPiService,
    ) { }
    async getProductsList(param, data) {
        const url = process.env.GET_PRODUCT_LIST as string
        let res = await this.callAPiService.CallApi("POST", url, data, "", { param })
        return res
    }
    async updateProduct(product_id, data) {
        const url = `${process.env.EDIT_PRODUCT as string}/${product_id}`
        let res = await this.callAPiService.CallApi("PUT", url, data, "", { product_id })
        return res
    }
    async syncProduct(warehouse_id: String) {
        const url = process.env.GET_PRODUCT_LIST as string
        let res = await this.callAPiService.CallApi("POST", url, warehouse_id)
        return res
    }

    async removeProduct(data) {
        const url = process.env.EDIT_PRODUCT as string
        let res = await this.callAPiService.CallApi("POST", url, data, "", "")
        return res
    }


}