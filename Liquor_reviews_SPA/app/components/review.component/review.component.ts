import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services';

@Component({
    selector: 'review',
    templateUrl: './review.component.html',
    providers: [ProductService],
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
    private _id: string;

    constructor(route: ActivatedRoute, private productService: ProductService) {
        this._route = route;
    }

    ngOnInit() {
        this.model = new Review('', 0, 0, '', false, '', 0);
    }

    submit() {
        // this._route.params.subscribe(result => this._id = result['id']);
        // this.productService.getProductByKey(this._id).subscribe(result => result.reviews.push(this.model));
    }

    rate(rating: Number) {
        this.model.rating = rating;
    }
}