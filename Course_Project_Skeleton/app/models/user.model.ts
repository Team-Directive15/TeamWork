export class User {
    username: string;
    password: string;
    expert: boolean;

    constructor(username: string, password: string, expert: boolean) {
        this.username = username;
        this.password = password;
        this.expert = expert;
    }
};