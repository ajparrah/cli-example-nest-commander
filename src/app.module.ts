import { Module } from '@nestjs/common';
import { ProfileModule, OrderModule } from '@modules';

@Module({
  imports: [ProfileModule, OrderModule],
})
export class AppModule {}
