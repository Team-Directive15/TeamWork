import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styles: [
        `h3 {
                display: inline-block;
              }
        `
    ]
})

export class AboutComponent {
    authors: FirebaseListObservable<any[]>;
    constructor(af: AngularFire) {
        this.authors = af.database.list('authors');
    }
}