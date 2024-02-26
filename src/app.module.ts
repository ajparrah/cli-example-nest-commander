import { Module } from '@nestjs/common';
import { SetupModule, OrderModule } from '@modules';

@Module({
  imports: [SetupModule, OrderModule],
})
export class AppModule {}
