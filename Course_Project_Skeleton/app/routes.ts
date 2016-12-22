import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WelcomeComponent } from './app.welcome.component';
import { AboutComponent } from './about.component/about.component';

export const routes: ModuleWithProviders
    = RouterModule.forRoot([
        {
            path: '',
            component: WelcomeComponent
        },
        {
            path: 'about',
            component: AboutComponent
        },
        {
            path: '**',
            redirectTo: ''
        }
    ]);