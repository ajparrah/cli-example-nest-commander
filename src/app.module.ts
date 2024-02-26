import { Module } from '@nestjs/common';
import { CommandModule } from './modules/command.module';

@Module({
  imports: [CommandModule],
})
export class AppModule {}
