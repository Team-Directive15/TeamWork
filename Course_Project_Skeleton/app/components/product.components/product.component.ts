import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { Review } from '../../models/review.model';

@Component({
    selector: 'productdetails',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    public product: Product;
    private _route: ActivatedRoute;

    constructor(route: ActivatedRoute) {
        this._route = route;
    }

    ngOnInit() {
        this.product = new Product('name', 'http://cdn-jpg.thedailymeal.net/sites/default/files/styles/tdmr_a5/public/story/2016/wine%20story.jpg', 5.1, 3.3, 'BG', '1999', 'some random red wine',
         [new Review('aa', 2, 3, 'aaa', false), new Review('a3refa', 2, 3, 'aaaaaaaada', true), new Review('usr', 2, 3, 'another review', false)]);
         console.log(this.product.reviews);
    }
}