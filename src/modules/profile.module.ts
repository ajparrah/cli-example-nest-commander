import { Module } from '@nestjs/common';
import { ProfileCommand } from '@commands';
import { AddProfileSubCommand } from '@sub-commands/profile';
import { ProfileService } from '@services';

@Module({
  providers: [ProfileCommand, AddProfileSubCommand, ProfileService],
  exports: [ProfileModule],
})
export class ProfileModule {}
