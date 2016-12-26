import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {
    AboutComponent, AppComponent, WelcomeComponent, LoginComponent, RegisterComponent, UserComponent,
    UsersComponent, ContactComponent, ProductsComponent, ProductComponent, ReviewComponent, RatingActiveComponent
} from './components'
import { routes } from './routes';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './config/firebase-config';
import { CapitalizePipe, ToUpperCase } from './pipes'
//import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routes,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        AboutComponent,
        RegisterComponent,
        LoginComponent,
        UserComponent,
        UsersComponent,
        ContactComponent,
        ProductsComponent,
        ProductComponent,
        ReviewComponent,
        RatingActiveComponent,
        CapitalizePipe,
        ToUpperCase
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
