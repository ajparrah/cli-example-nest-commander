#!/usr/bin/env node
import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';
import { name, version } from '../package.json';
import { errorHandlerUtil } from '@utils';

async function bootstrap() {
  await CommandFactory.run(AppModule, {
    cliName: name,
    version,
    errorHandler: errorHandlerUtil,
  });
}
bootstrap();
