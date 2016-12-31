import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'course-app',
    templateUrl: './app.main.component.html',
    styleUrls: ['./app.main.css']
})

export class AppComponent {

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
