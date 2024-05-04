import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  configureSwagger(app);

  await app.listen(3000);
}
bootstrap();

const configureSwagger = (app: INestApplication): void => {
  const config: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API endpoints documentation')
    .setVersion('1.0')
    .build();

  const api: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, api);
};
