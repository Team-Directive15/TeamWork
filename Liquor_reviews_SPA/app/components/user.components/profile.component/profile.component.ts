import { Component } from '@angular/core';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styles:[`
    .panel {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 20px;    
        max-width: 100%;
        width: auto\9;    
        width: 400px;
    }
    `]
})

export class ProfileComponent {
    userinfo: string = localStorage.getItem('loggedUser') && JSON.parse(localStorage.getItem('loggedUser'));;
    user: string = "blqblq";
    email: string = "blqblq";

    ngOnInit() {
        var currentUser = localStorage.getItem('loggedUser') && JSON.parse(localStorage.getItem('loggedUser'));
        this.email = currentUser && currentUser.email;
        this.user = this.email.substr(0, this.email.indexOf('@'));
    }

}