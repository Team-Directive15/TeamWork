import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { Review } from '../../models/review.model';
import { ProductService } from '../../services';

@Component({
    selector: 'productdetails',
    templateUrl: './product.component.html',
    providers: [ProductService],
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    public product: Product;
    private _route: ActivatedRoute;
    private _id: string;

    constructor(route: ActivatedRoute, private productService: ProductService) {
        this._route = route;
    }

    ngOnInit() {
        this._route.params.subscribe(result => this._id = result['id']);
        this.productService.getProductByKey(this._id).subscribe(product => this.product = product);

        if (!this.product.reviews) {
            this.product.reviews = [];
        }
    }
}