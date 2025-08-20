import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly client: Redis;
  private readonly logger = new Logger(RedisService.name);

  constructor(private readonly configService: ConfigService) {
    const redisUrl = this.configService.get<string>('REDIS_URL');
    if (!redisUrl) {
      throw new Error('REDIS_URL is not defined in environment variables');
    }
    this.client = new Redis(redisUrl, {
      maxRetriesPerRequest: 3, // Thử lại tối đa 3 lần
      retryStrategy: (times) => Math.min(times * 50, 2000), // Tăng thời gian chờ theo cấp số nhân
    });

    // Xử lý sự kiện lỗi
    this.client.on('error', (error) => {
      this.logger.error(`Redis error: ${error.message}`);
    });
  }

  async onModuleInit() {
    try {
      await this.client.ping();
      this.logger.log('✅ Redis connected successfully');
      await this.deleteSettingKeys(); // Xóa các khóa nếu cần
    } catch (error) {
      this.logger.error('❌ Redis connection failed:', error);
      throw error; // Ném lỗi để dừng ứng dụng nếu cần
    }
  }

  onModuleDestroy() {
    this.client.disconnect();
    this.logger.log('Redis connection closed');
  }

  private async deleteSettingKeys(): Promise<void> {
    let cursor = '0';
    do {
      const [newCursor, keys] = await this.client.scan(cursor, 'MATCH', 'SETTING_*', 'COUNT', 100);
      cursor = newCursor;
      if (keys.length > 0) {
        await this.client.del(...keys);
        this.logger.log(`Deleted ${keys.length} setting keys`);
      }
    } while (cursor !== '0');
  }

  get getClient(): Redis {
    return this.client;
  }
}