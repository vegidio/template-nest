import { DocumentBuilder } from '@nestjs/swagger';

export const swagger = new DocumentBuilder()
    .setTitle('Template Nest.js')
    .setDescription('API to control authentication and fetch info about countries')
    .addBearerAuth()
    .setVersion('1.0')
    .build();
