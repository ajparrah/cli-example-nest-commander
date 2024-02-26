import { Module } from '@nestjs/common';
import { ReprocessCommand } from '@sub-commands';
import { OrderModule } from './order.module';

@Module({
  imports: [OrderModule],
  providers: [ReprocessCommand],
  exports: [ReprocessCommand],
})
export class OrderSubCommandModule {}
