import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
