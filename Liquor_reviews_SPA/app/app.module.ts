import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {
    AboutComponent, AppComponent, WelcomeComponent, LoginComponent, RegisterComponent, UserComponent, UsersComponent,
    ContactComponent, ProductsComponent, ProductComponent, NewProductComponent, ReviewComponent, RatingActiveComponent,
    HeaderComponent, FooterComponent, ProfileComponent
} from './components';

import { CountriesService, AuthenticationService } from './services';

import { routes } from './routes';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './config/firebase-config';
import { CapitalizePipe, ToUpperCasePipe, SortPipe } from './pipes';
import { HoverDirective, UnderlineDirective, ItalicDirective } from './directives';
//import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routes,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [
        CountriesService,
        AuthenticationService
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
        NewProductComponent,
        ReviewComponent,
        RatingActiveComponent,
        HeaderComponent,
        FooterComponent,
        ProfileComponent,
        CapitalizePipe,
        ToUpperCasePipe,
        SortPipe,
        HoverDirective,
        UnderlineDirective,
        ItalicDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
