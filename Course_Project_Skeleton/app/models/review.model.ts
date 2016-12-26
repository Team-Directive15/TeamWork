export class Review {
    authorName: string;
    authorId: Number;
    rating: Number;
    text: string;
    id: Number;

    constructor(authorName: string, authorId: Number, rating: Number, text: string, id: Number) {
    this.authorName = authorName;
    this.authorId = authorId;
    this.rating = rating;
    this.text = text;
    this.id = id;
    }
};