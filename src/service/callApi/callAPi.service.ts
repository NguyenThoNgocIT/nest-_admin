import { AuthTikTokShopService } from "~/integrations/tiktok/tiktok.services/auth.service";
import { HttpService } from "@nestjs/axios";
import { HttpException, Inject, Injectable, Param } from "@nestjs/common";
// const xlsx = require('xlsx');
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
// import { promises } from 'dns';
import { generateSignature } from 'src/common';


@Injectable()
export class CallAPiService {
    constructor(
        private readonly httpService: HttpService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly authTikTokShopService: AuthTikTokShopService,

    ) { }


    async CallApi(method: string, url: string, data?: any, app_key?: string, params?: any) {
        let tiktok_access_token = await this.cacheManager.get("tiktok_access_token")
        let cipher_shop = await this.cacheManager.get("cipher_shop")
        if (!tiktok_access_token) {
            tiktok_access_token = await this.authTikTokShopService.getAccessToken()
            await this.cacheManager.set("tiktok_access_token", tiktok_access_token)
        }
        if (!cipher_shop) {
            let datashop = await this.authTikTokShopService.getAuthShop(app_key)
            if (datashop.length > 0) {
                cipher_shop = datashop[0].cipher
                await this.cacheManager.set("cipher_shop", cipher_shop)
            }
        }
        let sign = generateSignature(params, data, url)
        params["shop_cipher"] = cipher_shop
        params["sign"] = sign
        params["app_key"] = app_key ? app_key : process.env.TIKTOK_SHOP_APP_KEY
        params["timestamp"] = Math.floor(Date.now() / 1000);

        let domain = process.env.NODE_ENV == 'production' ? process.env.DOMAIN_API_TIKTOKSHOP_PRODUCT : process.env.DOMAIN_API_TIKTOKSHOP_SANBOX
        var config = {
            method: method,
            url: `${domain}/${url} `,
            prams: params,
            data: data,
            headers: {
                'Content-Type': 'application/json',
                "x-tts-access-token": `Bearer ${tiktok_access_token}`
            },
        };
        try {
            let res = await this.httpService.axiosRef(config);
            return res.data;
        } catch (error) {
            throw new HttpException({ message: error }, 400);
        }
    }


}