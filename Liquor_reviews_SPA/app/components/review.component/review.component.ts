import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'review',
    templateUrl: './review.component.html',
    styles: [
        `textarea { resize: none;},
        .form-horizontal { padding: 10px;}`
    ]
})

export class ReviewComponent {
    public model: Review;
    public textPattern: string = "^[^<>?,\$]{10,200}";
    public textTitle: string = "must be between 10 and 200 characters long";
    private _route: ActivatedRoute;

    constructor(route: ActivatedRoute) {
        this._route = route;
    }

    ngOnInit() {
        this.model = new Review('', 0, 0, '', false, '', 0);
    }

    submit() {

    }

    rate(rating: Number) {
        this.model.rating = rating;
    }
}