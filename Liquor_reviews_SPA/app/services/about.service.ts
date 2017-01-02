import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()

export class AboutService {

    constructor(private af: AngularFire) { }

    getAllAuthors() {
        return this.af.database.list('authors');
    }
}