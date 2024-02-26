import { Module } from '@nestjs/common';
import { DynamoDbClient } from './dynamo-db.client';

@Module({
  providers: [DynamoDbClient],
  exports: [DynamoDbClient],
})
export class AwsModule {}
