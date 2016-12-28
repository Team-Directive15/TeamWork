import { Component, OnInit  } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    model: User;

    ngOnInit() {
        this.model = new User('', '', false);
    }
    register() {
        console.log('register here');
    }
}