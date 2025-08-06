import { Module } from '@nestjs/common'
import { OdooController } from './odoo.controller'
import { OdooService } from './odoo.service'

@Module({
  providers: [OdooService],
  controllers: [OdooController],
  exports: [OdooService],
})
export class OdooModule {

}
