import { NestFactory } from '@nestjs/core';
import cors from 'cors';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { MongoExceptionFilter } from './exception-filters/mongo.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(
    cors({
      origin: [process.env.FRONTEND_URL!],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    }),
  );
  app.useGlobalFilters(new MongoExceptionFilter());
  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(process.env.PORT ?? 4000, () => {
    console.log(`Server running on port ${process.env.PORT ?? 4000}`);
  });
}
bootstrap();
