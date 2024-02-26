import { Injectable } from '@nestjs/common';

@Injectable()
export class SetupService {
  public async createRootFile(): Promise<boolean> {
    console.log('Creating root file');

    return true;
  }
}
