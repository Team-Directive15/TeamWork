import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
    selector: 'productsList',
    templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit{
    products: Product[];

    ngOnInit() {
        this.products = [new Product('name', 'img', 5, 'BG', '1999', 1), new Product('name', 'img', 5, 'BG', '1999', 2)];
    }
}