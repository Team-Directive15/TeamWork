import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Review } from '../../models/review.model';
import { CountriesService } from '../../services/countries.service';
import { ProductService } from '../../services';
import { Router } from '@angular/router';

@Component({
    selector: 'productsList',
    templateUrl: './newproduct.component.html',
    providers: [ProductService],
    styleUrls: ['./newproduct.component.css']
})

export class NewProductComponent implements OnInit {

    public model: Product;
    public countries: string[];
    public years: string[];
    public namePattern: string = "^[^<>?,\$]{6,20}";
    public nameTitle: string = "must be between 5 and 15 characters long";
    public descrPattern: string = "^[^<>?,\$]{10,30}";
    public descrTitle: string = "must be between 10 and 30 characters long";
    public imgPattern: string = "(https?:\/\/.*\.(?:png|jpg|jpeg))";
    public imgTitle: string = "must be a valid link to an image";
    private _countriesService: CountriesService;
    private _productService: ProductService;
    private _router: Router;

    constructor(countriesService: CountriesService, productService: ProductService, router: Router) {
        this._countriesService = countriesService;
        this._productService = productService;
        this._router = router;
        this.years = [];
    }

    ngOnInit() {
        var today = new Date();
        var yy = today.getFullYear();
        for (var i = (yy - 50); i <= yy; i++) {
            this.years.push(i.toString());
        }

        this.model = new Product('', '', 0, 0, '', '', '', []);
        this.countries = this._countriesService.getCountries();
    }

    submit() {
        this._productService.addNewProduct(this.model)
        .then(() => {
            this._router.navigate(['products']);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
}