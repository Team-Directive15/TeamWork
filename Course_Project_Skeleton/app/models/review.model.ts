export class Review {
    authorName: string;
    authorId: Number;
    rating: Number;
    text: string;
    expert: boolean;
    productName: string;
    productId: Number;

    constructor(authorName: string, authorId: Number, rating: Number, text: string, expert: boolean, productName: string, productId: Number) {
    this.authorName = authorName;
    this.authorId = authorId;
    this.rating = rating;
    this.text = text;
    this.expert = expert;
    this.productName = productName;
    this.productId = productId;
    }
};