import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FirebaseService } from './services/firebase.service';
import { FirebaseController } from './controllers/firebase.controller';

@Module({
    imports: [HttpModule],
    controllers: [FirebaseController],
    providers: [FirebaseService],
})
export class AppModule {}
