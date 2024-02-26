import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  public async reProcess(id: string): Promise<boolean> {
    console.log(`Re-processing order with id ${id}`);
    return true;
  }
}
