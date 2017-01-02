import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { UsersService } from '../../services';
import { User } from '../../models/user.model';
import { Review } from '../../models/review.model';

@Component({
    selector: 'users',
    templateUrl: './users.component.html'
})

export class UsersComponent { 
    
    users: User[];
    experts: User[];

    constructor(private userservice: UsersService) { }

    ngOnInit() {
        let allUsers: FirebaseListObservable<User>;
        this.userservice.getAllUsers().subscribe(user => {allUsers.push(user)});
        allUsers.forEach(user => {
            if (user.expert) {
                this.experts.push(user);
            }
            else {
                this.users.push(user);
            }
        });
    }
}