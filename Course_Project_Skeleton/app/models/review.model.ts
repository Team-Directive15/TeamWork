export class Review {
    authorName: string;
    authorId: Number;
    rating: Number;
    text: string;

    constructor(authorName: string, authorId: Number, rating: Number, text: string) {
    this.authorName = authorName;
    this.authorId = authorId;
    this.rating = rating;
    this.text = text;
    }
};