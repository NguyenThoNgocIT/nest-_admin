import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PrintifyService } from '~/shared/printify/printify.service';

@Module({
  imports: [HttpModule],
  providers: [PrintifyService],
  exports: [PrintifyService],
})
export class PrintifyModule {}