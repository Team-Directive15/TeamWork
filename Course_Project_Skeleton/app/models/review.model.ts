export class Review {
    authorName: string;
    authorId: Number;
    rating: Number;
    text: string;
    expert: boolean;

    constructor(authorName: string, authorId: Number, rating: Number, text: string, expert: boolean) {
    this.authorName = authorName;
    this.authorId = authorId;
    this.rating = rating;
    this.text = text;
    this.expert = expert;
    }
};