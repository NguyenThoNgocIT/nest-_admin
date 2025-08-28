import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ConfigService } from '@nestjs/config';
import sharp from 'sharp';

@Injectable()
export class PrintifyService {
  private readonly apiUrl = 'https://api.printify.com/v1';
  private readonly apiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {
    // Lấy key từ env
    this.apiKey = this.configService.get<string>('PRINTIFY_API_KEY');
  }

  async syncProducts(shopId: string) {
    const cacheKey = `printify_products_${shopId}`;
    const cachedData = await this.cacheManager.get(cacheKey);
    if (cachedData) return cachedData;
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.apiUrl}/shops/${shopId}/products.json`, {
          headers: { Authorization: `Bearer ${this.apiKey}` },
        }),
      );
      console.log('response',response);

      const products = response.data.data;
      await this.cacheManager.set(cacheKey, products, 10 * 60 * 1000); // Cache 10 phút
      return products;
    } catch (error) {
      throw new Error(`Failed to sync Printify products: ${error}`);
    }
  }

  async uploadDesignFile(designData: any) {
    try {
      // designData.image là base64 từ canvas
      const buffer = Buffer.from(designData.image, 'base64');
      const processedBuffer = await sharp(buffer)
        .resize({ width: 1000, height: 1000, fit: 'contain' }) // Đáp ứng specs
        .png({ quality: 100 })
        .toBuffer();

      const response = await firstValueFrom(
        this.httpService.post(
          `${this.apiUrl}/uploads/images.json`,
          {
            file_name: `design_${Date.now()}.png`,
            contents: processedBuffer.toString('base64'),
          },
          {
            headers: { Authorization: `Bearer ${this.apiKey}` },
          },
        ),
      );
      return response.data.data.id; // Return upload ID for order
    } catch (error) {
      throw new Error(`Upload file to Printify failed: ${error.message}`);
    }
  }
}
