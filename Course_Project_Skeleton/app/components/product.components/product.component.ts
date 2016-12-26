import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'productdetails',
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {
    public product: Product;
    private _route: ActivatedRoute;

    constructor(route: ActivatedRoute) {
        this._route = route;
    }

    ngOnInit() {
        this.product = new Product('name', 'img', 5, 'BG', '1999', (<any>this._route.params)._value.id);
    }
}