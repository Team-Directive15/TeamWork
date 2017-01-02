import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Review } from '../../models/review.model';
import { ProductService } from '../../services';
import { FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'productsList',
    templateUrl: './products.component.html',
    providers: [ProductService],
    styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
    products: FirebaseListObservable<any[]>;
    user: boolean = localStorage.getItem('loggedUser') ? true : false;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.products = this.productService.getAllProducts();
        this.products.subscribe();
    }
}