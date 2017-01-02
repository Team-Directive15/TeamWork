import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    user: boolean = localStorage.getItem('loggedUser') ? true : false;
    email: string = "";
    username: string = "No user";

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.user = localStorage.getItem('loggedUser') ? true : false;
        var currentUser = localStorage.getItem('loggedUser') && JSON.parse(localStorage.getItem('loggedUser'));
        this.email = currentUser && currentUser.email || this.email;
        this.username = this.email.substr(0, this.email.indexOf('@'));
    }

    Logout() {
        this.authenticationService.logout()
            .then(() => {
                localStorage.removeItem('loggedUser');
                this.router.navigate(['']);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}