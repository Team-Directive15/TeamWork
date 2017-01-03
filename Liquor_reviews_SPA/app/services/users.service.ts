import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()

export class UsersService {

    constructor(private af: AngularFire) { }

    getAllUsers() {
        return this.af.database.list('users');
    }

    addReview(key: string, object: any) {
        let product = this.af.database.object('/users/' + key);
        product.update({ reviews: object });
    }
}