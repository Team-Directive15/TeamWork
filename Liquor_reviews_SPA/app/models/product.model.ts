import { Review } from './review.model';

export class Product {
    name: string;
    description: string;
    img: string;
    userrating: Number;
    exprating: Number;
    country: string;
    year: string;
    reviews: Review[];

    constructor(name: string, img: string, userrating: Number, exprating: Number, country: string,  year: string, description: string, reviews:Review[]) {
        this.name = name;
        this.img = img;
        this.userrating = userrating;
        this.exprating = exprating;
        this.country = country;
        this.year = year;
        this.description = description;
        this.reviews = reviews;
    }
};