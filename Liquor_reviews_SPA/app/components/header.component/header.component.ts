import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})

export class HeaderComponent { 
    constructor(private router: Router, private authenticationService: AuthenticationService) { }

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