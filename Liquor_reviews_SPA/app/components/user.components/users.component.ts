import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { UsersService } from '../../services';
import { User } from '../../models/user.model';
import { Review } from '../../models/review.model';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    providers: [UsersService],
    styleUrls: ['./users.component.css']
})

export class UsersComponent {
    users: FirebaseListObservable<any[]>;

    constructor(private userservice: UsersService) { }

    ngOnInit() {
        this.users = this.userservice.getAllUsers();
        this.users.subscribe();
    }
}