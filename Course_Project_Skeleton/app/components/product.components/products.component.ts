import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
    selector: 'productsList',
    templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit{
    products: Product[];

    ngOnInit() {
        this.products = [new Product('placeholder', 'placeholder'), new Product('placeholder2', 'placeholder2')];
    }
}