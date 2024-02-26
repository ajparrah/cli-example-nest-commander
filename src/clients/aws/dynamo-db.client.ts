import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamoDbClient {
  async config(): Promise<boolean> {
    return true;
  }
}
