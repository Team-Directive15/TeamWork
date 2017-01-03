import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { AuthenticationService, UsersService } from '../../services';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [UsersService],
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    public model: User;
    public error: string = "";
    public passwordPattern: string = "[0-9]{6,20}";
    public passwordTitle: string = "must contain digits between 6 and 20 symbols long";
    public emailPattern: string = "^[^<>?,\$]{5,20}";
    public emailTitle: string = "must be between 5 and 20 characters long";

    constructor(private router: Router, private authenticationService: AuthenticationService, private usersService: UsersService) { }

    ngOnInit() {
        this.model = new User('', '', '', false, []);
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

        this.model = new User(this.model.email, '', this.model.email.substr(0, this.model.email.indexOf('@')), false, []);
        this.usersService.addNewUser(this.model);
    }
}