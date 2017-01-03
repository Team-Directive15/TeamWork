import { Review } from './review.model';

export class User {
    email: string;
    password: string;    
    username: string;
    expert: boolean;
    reviews: Review[];

    constructor(email: string, password: string,username?: string,  expert?: boolean, reviews?: Review[]) {
        this.email = email;
        this.password = password;
        this.username = username;        
        this.expert = expert;
        this.reviews = reviews;
    }
};