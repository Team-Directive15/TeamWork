export class Review {
    authorName: string;
    authorId: number;
    rating: number;
    text: string;
    expert: boolean;
    productName: string;
    productId: number;

    constructor(authorName: string, authorId: number, rating: number, text: string, expert: boolean, productName: string, productId: number) {
        this.authorName = authorName;
        this.authorId = authorId;
        this.rating = rating;
        this.text = text;
        this.expert = expert;
        this.productName = productName;
        this.productId = productId;
    }
};