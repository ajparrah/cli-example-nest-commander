import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  public async existsProfile(): Promise<boolean> {
    return false;
  }
}
