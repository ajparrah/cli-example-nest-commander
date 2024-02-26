import { Module } from '@nestjs/common';
import { OrderService } from '@services';
import { OrderCommand } from '@commands';
import { ReprocessOrderCommand } from '@sub-commands/order';

@Module({
  providers: [OrderService, OrderCommand, ReprocessOrderCommand],
  exports: [OrderService],
})
export class OrderModule {}
