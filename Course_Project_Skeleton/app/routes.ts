import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WelcomeComponent, AboutComponent } from './components'

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