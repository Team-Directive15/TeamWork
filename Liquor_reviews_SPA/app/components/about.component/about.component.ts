import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { AboutService } from '../../services';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    providers: [AboutService],
    styles: [
        `h3 {
                display: inline-block;
              }
        `
    ]
})

export class AboutComponent {
    authors: FirebaseListObservable<any[]>;

    constructor(private aboutService: AboutService) { }

    ngOnInit() {
        this.authors = this.aboutService.getAllAuthors();
    }
}