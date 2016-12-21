import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Component({
    selector: 'course-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    items:FirebaseListObservable<any[]>;
    constructor(af: AngularFire) {
        this.items = af.database.list('items');
    }
}
