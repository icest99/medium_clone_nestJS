if (!process.env.IS_TS_NODE) {
  require('module-alias/register'); // in production we won't have TS-Node, so this line will run
  // it's necessary for production build
}
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // create new application
  await app.listen(3000);
}
bootstrap();
