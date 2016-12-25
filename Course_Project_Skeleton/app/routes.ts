import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WelcomeComponent, AboutComponent, LoginComponent, RegisterComponent, UserComponent, UsersComponent, ContactComponent, ProductsComponent } from './components'

export const routes: ModuleWithProviders
    = RouterModule.forRoot([
        {
            path: '',
            component: WelcomeComponent
        },
        {
            path: 'register',
            component: RegisterComponent
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'user',
            component: UserComponent
        },
        {
            path: 'products',
            component: ProductsComponent
        },
        {
            path: 'users',
            component: UsersComponent
        },
        {
            path: 'about',
            component: AboutComponent
        },
        {
            path: 'contact',
            component: ContactComponent
        },
        {
            path: '**',
            redirectTo: ''
        }
    ]);