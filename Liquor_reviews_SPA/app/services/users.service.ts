import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()

export class UsersService {

    constructor(private af: AngularFire) { }

    getAllUsers() {
        return this.af.database.list('users');
    }
}