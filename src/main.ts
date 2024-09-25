import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { swagger } from '@src/config';
import { AppModule } from './app.module';

const bootstrap = async (): Promise<void> => {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.enableVersioning({ type: VersioningType.URI });
    
    // The `whitelist: true` option tells the validation pipe to strip away any properties that do not have decorators.
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    // Swagger
    const document = SwaggerModule.createDocument(app, swagger);
    SwaggerModule.setup('docs', app, document);

    await app.listen(3000);
};

bootstrap();
