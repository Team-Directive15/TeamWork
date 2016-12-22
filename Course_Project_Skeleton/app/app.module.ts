import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import{AboutComponent,AppComponent,WelcomeComponent} from './components'
import { routes } from './routes';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './config/firebase-config';
//import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routes,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        AboutComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
