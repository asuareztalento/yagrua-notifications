import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const admin = require('firebase-admin');
var serviceAccount = require('../yagrua-firebase-adminsdk.json');

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });

    const config = new DocumentBuilder()
        .setTitle('Notifications YaGrúa')
        .setDescription('Notifications YaGrúa')
        .setVersion('1.0')
        .addTag('notifications')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });

    await app.listen(3008);
}
bootstrap();
