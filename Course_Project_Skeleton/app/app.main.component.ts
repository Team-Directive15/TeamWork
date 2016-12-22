import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Component({
    selector: 'course-app',
    templateUrl: './app.main.component.html'
})

export class AppComponent {
    items:FirebaseListObservable<any[]>;
    constructor(af: AngularFire) {
        this.items = af.database.list('authors');
        this.items.forEach(element => {
            console.log(element)
        });
    }
}
