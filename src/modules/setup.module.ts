import { Module } from '@nestjs/common';
import { SetupService } from '@services';
import { SetupCommand } from '@commands';

@Module({
  providers: [SetupService, SetupCommand],
})
export class SetupModule {}
