import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';


@Injectable()
export class DataService {
  getCountries() {
    return [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' ),
     new Country(4, 'Bulgaria' ),
     new Country(5, 'France' )
    ];
  }
}