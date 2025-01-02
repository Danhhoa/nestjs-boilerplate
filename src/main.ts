import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, { logger: ['log', 'fatal'] });

    app.setGlobalPrefix('/api/v1');

    await app.listen(process.env.PORT ?? 8080);

    console.log(`Server is running at ${process.env.HOST}:${process.env.PORT}`);
}

bootstrap();
