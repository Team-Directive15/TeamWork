import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { User } from '../models/user.model';

@Injectable()

export class AuthenticationService {
    constructor(private firebase: AngularFire) { }

    register(user: User) {
        return firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password);
    }

    login(user: User) {
        return firebase.auth()
            .signInWithEmailAndPassword(user.email, user.password);
    }

    logout() {
        return firebase.auth()
            .signOut();
    }
}