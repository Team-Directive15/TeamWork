import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'review',
    templateUrl: './review.component.html',
})

export class ReviewComponent {
    public model: Review;
    private _route: ActivatedRoute;

    constructor(route: ActivatedRoute) {
        this._route = route;
    }

    ngOnInit() {
        this.model = new Review('', 0, 0, '', 0);
    }

    submit() {
        
    }
}