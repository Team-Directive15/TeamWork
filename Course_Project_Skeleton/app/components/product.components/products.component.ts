import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
    selector: 'productsList',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{
    products: Product[];

    ngOnInit() {
        this.products = [new Product('name', 'img', 5.1, 4.0, 'BG', '1999', 1,  'some random red wine'), new Product('name', 'img', 2, 3, 'BG', '1999', 2,  'some random red wine')];
    }
}