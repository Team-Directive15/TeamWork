import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    model: User;

    ngOnInit() {
        this.model = new User('', '', '');
    }

    login() {
        console.log('login here');
    }
}