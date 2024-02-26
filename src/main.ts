import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';

async function bootstrap() {
  console.log('Running the app');
  await CommandFactory.run(AppModule, {
    errorHandler: (error) => console.error('Error', error),
  });
}
bootstrap();
