import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Review } from '../../models/review.model';

@Component({
    selector: 'productsList',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{
    products: Product[];

    ngOnInit() {
        this.products = [new Product('name', 'http://whitespringswinery.com/wp-content/uploads/2016/07/red-white-wine-120111-shutterstock.jpg', 5.1, 4.0, 'BG', '1999',  'some random red wine', [new Review('aa', 2, 3, 'aaa', false)])
        , new Product('name', 'http://cdn-jpg.thedailymeal.net/sites/default/files/styles/tdmr_a5/public/story/2016/wine%20story.jpg', 2, 3, 'BG', '1999',  'some random red wine', [new Review('aa', 2, 3, 'aaa', true)])
        , new Product('name', 'http://cdn-jpg.thedailymeal.net/sites/default/files/styles/tdmr_a5/public/story/2016/wine%20story.jpg', 2, 3, 'BG', '1999',  'some random red wine', [new Review('aa', 2, 3, 'aaa', true)])
        , new Product('name', 'http://cdn-jpg.thedailymeal.net/sites/default/files/styles/tdmr_a5/public/story/2016/wine%20story.jpg', 2, 3, 'BG', '1999',  'some random red wine', [new Review('aa', 2, 3, 'aaa', true)])];
    }
}