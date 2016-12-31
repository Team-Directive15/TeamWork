import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'course-app',
    templateUrl: './app.main.component.html',
    styleUrls: ['./app.main.css']
})

export class AppComponent {

    Logout() {
        console.log('auth.logout');
    }
}
