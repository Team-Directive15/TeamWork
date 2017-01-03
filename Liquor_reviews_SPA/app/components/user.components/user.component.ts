import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { Review } from '../../models/review.model';
import { UsersService } from '../../services';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    providers: [UsersService]
})

export class UserComponent {
    private _route: ActivatedRoute;
    public user: User;

    constructor(route: ActivatedRoute) {
        this._route = route;
    }

    ngOnInit() {
        this.user = new User('ExmplUsr', 'aaa', false, [new Review('aa', 2, 3, 'aaa', true, 'prd', 2)]);
    }
}