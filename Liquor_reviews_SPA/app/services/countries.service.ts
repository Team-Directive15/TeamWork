import { Injectable } from '@angular/core';


@Injectable()
export class CountriesService {
  getCountries() {
    return [
     'USA',
     'India',
     'Australia',
     'Bulgaria',
     'France'
    ];
  }
}