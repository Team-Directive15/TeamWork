import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { Review } from '../../models/review.model';
import { UsersService } from '../../services';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    providers: [UsersService],
    styles: [`
    .specificUser {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        max-width: 100%;
        width: auto\9;
        width: 200px;
    }
    `]
})

export class UserComponent {
    public user: User;
    private _route: ActivatedRoute;
    private _id: string;

    constructor(route: ActivatedRoute, private usersService: UsersService) {
        this._route = route;
    }

    ngOnInit() {
        this._route.params.subscribe(result => this._id = result['id']);
        this.usersService.getUserByKey(this._id).subscribe(user => this.user = user);

        if (!this.user.reviews) {
            this.user.reviews = [];
        }
    }
}