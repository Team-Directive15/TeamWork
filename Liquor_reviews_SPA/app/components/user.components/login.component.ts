import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    model: User;
    error: string = "";

    constructor(private router: Router, private authenticationServise: AuthenticationService) { }

    ngOnInit() {
        this.model = new User('', '', false, []);
    }

    login() {
        let user = new User(this.model.email, this.model.password);
        this.authenticationServise.login(user)
            .then(() => {
                this.router.navigate(['']);
            })
            .catch((error) => {
                this.error = error.message
            });
    }
}