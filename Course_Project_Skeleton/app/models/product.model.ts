export class Product {
    name: string;
    description: string;
    img: string;
    userrating: Number;
    exprating: Number;
    country: string;
    year: string;
    id: Number;

    constructor(name: string, img: string, userrating: Number, exprating: Number, country: string,  year: string, id: Number, description: string) {
        this.name = name;
        this.img = img;
        this.userrating = userrating;
        this.exprating = exprating;
        this.country = country;
        this.year = year;
        this.id = id;
        this.description = description;
    }
};