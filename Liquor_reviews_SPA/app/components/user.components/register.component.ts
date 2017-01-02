import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    public model: User;
    public error: string = "";
    public passwordPattern: string = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}";
    public passwordTitle: string = "must contain at least one number and one uppercase and lowercase letter, and between 6 and 20 characters long";
    public emailPattern: string = "^[^<>?,\$]{5,20}";
    public emailTitle: string = "must be between 5 and 20 characters long";

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.model = new User('', '', false, []);
    }

    register() {
        let user = new User(this.model.email, this.model.password)
        this.authenticationService.register(user)
            .then(() => {
                this.router.navigate(['login']);
            })
            .catch((error) => {
                this.error = error.message;
            });
    }
}