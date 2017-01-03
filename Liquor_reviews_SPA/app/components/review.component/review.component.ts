import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

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
    public error: string = "";
    public model: Review;
    public product: Product;
    public textPattern: string = "^[^<>?,\$]{10,200}";
    public textTitle: string = "must be between 10 and 200 characters long";
    public username: string;
    private _route: ActivatedRoute;
    private _id: string;

    constructor(private router: Router, route: ActivatedRoute, private productService: ProductService) {
        this._route = route;
    }

    ngOnInit() {
        let user = localStorage.getItem('loggedUser') ? true : false;
        let currentUser = localStorage.getItem('loggedUser') && JSON.parse(localStorage.getItem('loggedUser'));
        let email = currentUser && currentUser.email;
        this.username = email.substr(0, email.indexOf('@'));

        this.model = new Review(this.username, 0, 1, '', false, '', 0);
        this._route.params.subscribe(result => this._id = result['id']);
        this.productService.getProductByKey(this._id).subscribe(product => this.product = product);
        if (!this.product.reviews) {
            this.product.reviews = [];
        }
    }

    submit() {
        this.product.reviews.push(this.model);
        this.productService.addReview(this._id, this.product.reviews);

        let sum: number = 0;
        for (var index = 0; index < this.product.reviews.length; index++) {
            sum += this.product.reviews[index].rating;
            console.log(this.product.reviews[index].rating);
        }

        let rating = sum / this.product.reviews.length;

        console.log(rating.toFixed(1));

        this.productService.updateUserRating(this._id, rating.toFixed(1));

        //then ??
        this.router.navigate(['product/' + this._id]);
    }

    rate(rating: number) {
        this.model.rating = rating;
    }
}