import { Review } from './review.model';

export class User {
    username: string;
    password: string;
    expert: boolean;
    reviews: Review[];

    constructor(username: string, password: string, expert?: boolean, reviews?: Review[]) {
        this.username = username;
        this.password = password;
        this.expert = expert;
        this.reviews = reviews;
    }
};