import { Body, Controller, Post } from '@nestjs/common';
import { FirebaseService } from 'src/services/firebase.service';

@Controller('notification')
export class FirebaseController {
    constructor(public firebaseService: FirebaseService) {}

    @Post()
    sendNotification(@Body() data) {
        return this.firebaseService.sendAssignedServantMessage(data);
    }
}
