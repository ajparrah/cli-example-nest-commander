import { Module } from '@nestjs/common';
import { OrderCommand } from '@commands';
import { OrderSubCommandModule } from './order-sub-command.module';

@Module({
  imports: [OrderSubCommandModule],
  providers: [OrderCommand],
})
export class CommandModule {}
