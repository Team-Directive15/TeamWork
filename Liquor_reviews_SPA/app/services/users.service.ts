import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { User } from '../models/user.model';

@Injectable()

export class UsersService {

    constructor(private af: AngularFire) { }

    addNewUser(user: User) {
        return firebase.database().ref('users').push(user);
    }

    getAllUsers() {
        return this.af.database.list('users');
    }

    getUserByKey(key: string) {
        return this.af.database.object('/users/' + key);
    }

    addReview(key: string, object: any) {
        let product = this.af.database.object('/users/' + key);
        product.update({ reviews: object });
    }
}