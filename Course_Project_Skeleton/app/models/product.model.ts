export class Product {
    name: string;
    img: string;
    rating: Number;
    country: string;
    year: string;
    id: Number;

    constructor(name: string, img: string, rating: Number, country: string,  year: string, id: Number) {
        this.name = name;
        this.img = img;
        this.rating = rating;
        this.country = country;
        this.year = year;
        this.id = id;
    }
};