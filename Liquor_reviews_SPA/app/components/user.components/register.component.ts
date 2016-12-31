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
    model: User;
    
    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.model = new User('', '', false, []);
    }

    register() {
        let user = new User(this.model.username, this.model.password)
        this.authenticationService.register(user)
            .then(() => {
                this.router.navigate(['']);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}