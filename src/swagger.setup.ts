import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Natours Nest API')
    .setDescription('Natours API Documentation')
    .setVersion('0.0.1')
    .setLicense(
      'MIT',
      'https://github.com/chsjr1996/natours-nest-api/blob/main/LICENSE',
    )
    .addTag('auth', 'Auth endpoints to allow use API protected modules')
    .addTag('review', 'Review resource with data related with tours')
    .addTag('tour', 'Tour resource with main API data')
    .addTag('user', 'User resource with common and admins users')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
};