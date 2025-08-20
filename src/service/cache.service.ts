import { Injectable } from '@nestjs/common';
import { RedisService } from './redis.service';

@Injectable()
export class CacheService {
  constructor(private readonly redisService: RedisService) { }

  async setCache(key: string, value: string, ttl?: number): Promise<void> {
    const client = this.redisService.getClient;
    await  client.set(key, value, 'EX', ttl || 3600);
  }

  async getCache(key: string): Promise<string | null> {
    const client = this.redisService.getClient;
    return client.get(key);
  }

  async deleteCache(key: string): Promise<void> {
    const client = this.redisService.getClient;
    await client.del(key);
  }
}