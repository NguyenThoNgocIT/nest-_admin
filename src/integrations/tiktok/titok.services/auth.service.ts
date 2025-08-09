import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { firstValueFrom } from 'rxjs'
import { generateSignature } from '../../../common/function/util.function'

@Injectable()
export class AuthTikTokShopService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getAccessTonken(code: string): Promise<any> {
    const apiKey = this.configService.get<string>('TIKTOK_SHOP_API_KEY')
    const secret = this.configService.get<string>('TIKTOK_SHOP_SECRET')
    const auth_code = this.configService.get<string>('TIKTOK_SHOP_SECRET')

    const params = {
      app_key: apiKey,
      app_secret: secret,
      auth_code,
      grant_type: 'authorization_code',
    }

    const url = `${this.configService.get<string>('TIKTOK_SHOP_API_URL')}/token/get`

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, {
          ...params,
        }),
      )
      return response.data
    }
    catch (error) {
      throw new Error(`Failed to get access token: ${error.message}`)
    }
  }

  async getAuthShop(app_key?: string): Promise<any> {
    const apiKey = this.configService.get<string>('TIKTOK_SHOP_API_KEY')
    const timestamp = Math.floor(Date.now() / 1000)
    const signature = generateSignature({
      timestamp,
    }, '', '/authorization/202309/shop')

    const params = {
      app_key: app_key || apiKey,
      sig: signature,
      timestamp,
    }

    const url = `${this.configService.get<string>('TIKTOK_SHOP_API_URL')}/authorization/202309/shops`

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, {
          ...params,
        }),
      )
      return response?.data?.shops
    }
    catch (error) {
      throw new Error(`Failed to get access token: ${error}`)
    }
  }
}
