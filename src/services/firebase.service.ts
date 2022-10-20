import { Injectable } from '@nestjs/common';

const admin = require('firebase-admin');

@Injectable()
export class FirebaseService {
    constructor() {}

    sendAssignedServantMessage(data) {
        try {
            admin.messaging().send(data.message);
        } catch (err) {
            console.log(err);
        }
    }
}
