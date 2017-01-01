import { Review } from './review.model';

export class User {
    email: string;
    password: string;
    expert: boolean;
    reviews: Review[];

    constructor(email: string, password: string, expert?: boolean, reviews?: Review[]) {
        this.email = email;
        this.password = password;
        this.expert = expert;
        this.reviews = reviews;
    }
};