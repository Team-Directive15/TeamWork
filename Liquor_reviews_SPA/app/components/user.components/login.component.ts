import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styles: [`
    .container {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 20px;    
        max-width: 100%;
        width: auto\9;    
        width: 600px;
    }
    a.regnow {
        margin-left: 150px;
        margin-top: 20px;
        margin-bottom: 20px;    
        max-width: 100%;
        width: auto\9;    
    }
    `]
})

export class LoginComponent {
    model: User;
    error: string = "";

    constructor(private router: Router, private authenticationServise: AuthenticationService) { }

    ngOnInit() {
        this.model = new User('', '', '', false, []);
    }

    login() {
        let user = new User(this.model.email, this.model.password);
        this.authenticationServise.login(user)
            .then(() => {
                localStorage.setItem('loggedUser', JSON.stringify({ email: this.model.email, password: this.model.password }));
                location.reload();
                this.router.navigate(['']);

            })
            .catch((error) => {
                this.error = error.message
            });
    }
}