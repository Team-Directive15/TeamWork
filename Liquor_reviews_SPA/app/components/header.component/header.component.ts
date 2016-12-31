import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    user: boolean = localStorage.getItem('loggedUser') !== null ? true : false;
    email: string;
    //username: string = this.email.substr(0, this.email.indexOf('@'));

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.user = localStorage.getItem('loggedUser') !== null ? true : false;
        var currentUser = localStorage.getItem('loggedUser') && JSON.parse(localStorage.getItem('loggedUser'));
        this.email = currentUser && currentUser.email;
    }

    Logout() {
        this.authenticationService.logout()
            .then(() => {
                localStorage.removeItem('loggedUser');
                //this.user = false;
                setTimeout(() => this.router.navigate(['']), 2000);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}