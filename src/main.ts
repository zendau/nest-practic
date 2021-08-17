import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule)


  const config = new DocumentBuilder()
    .setTitle('Nest practic')
    .setDescription('The nest practic API description')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT)
  console.log(`server started on http://localhost:${process.env.PORT}`)
}
bootstrap();
