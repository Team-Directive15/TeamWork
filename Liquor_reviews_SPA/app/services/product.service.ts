import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Product } from '../models/product.model';

@Injectable()

export class ProductService {

    constructor(private af: AngularFire) { }
    
    addNewProduct(product: Product) {
        return firebase.database().ref('products').push(product);
    }

    getAllProducts() {
        return this.af.database.list('products');
    }

    getProductByKey(key: string) {
        return this.af.database.object('/products/'+ key);
    }

    addReview(key: string, object: any) {
        let product = this.af.database.object('/products/'+ key);
        product.update({ reviews: object });
    }
}