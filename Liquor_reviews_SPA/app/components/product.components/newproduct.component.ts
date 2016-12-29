import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Review } from '../../models/review.model';
import { CountriesService } from '../../services/countries.service';

@Component({
    selector: 'productsList',
    templateUrl: './newproduct.component.html',
    styleUrls: ['./newproduct.component.css']
})

export class NewProductComponent implements OnInit{

    public model: Product;
    public countries: string[];
    public years: string[];
    private _countriesService: CountriesService;

    constructor(countriesService: CountriesService) {
        this._countriesService = countriesService;
        this.years = [];
    }

    ngOnInit() {
        var today = new Date();
        var yy = today.getFullYear();        
        for(var i = (yy-50); i <= yy; i++){
        this.years.push(i.toString());}

        this.model = new Product('', '', 0, 0, '', '',  '', []);
        this.countries = this._countriesService.getCountries();
    }

    submit() {
        console.log('stuff happens');
    }
}