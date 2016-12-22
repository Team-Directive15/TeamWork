import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.main.component';
import { WelcomeComponent } from './app.welcome.component';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './config/firebase-config';
//import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [
        AppComponent, 
        WelcomeComponent
        ],
    bootstrap: [AppComponent]
})
export class AppModule { }
