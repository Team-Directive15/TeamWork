import { Component } from '@angular/core'

@Component({
    selector: 'app-content-loading',
    templateUrl: './app.welcome.component.html',
    styles:[`
    p {
        width: 380px;
        display: inline;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 20px;    
        max-width: 100%;
        width: auto\9;    
        width: 800px;
    }
    `]
})

export class WelcomeComponent { }
