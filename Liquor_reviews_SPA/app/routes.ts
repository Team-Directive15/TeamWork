import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WelcomeComponent, AboutComponent, LoginComponent, RegisterComponent, UserComponent, UsersComponent, 
    ContactComponent, ProductsComponent, ProductComponent, NewProductComponent, ReviewComponent, ProfileComponent } from './components'

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
            path: 'users/:id',
            component: UserComponent
        },
        {
            path: 'products',
            component: ProductsComponent
        },
        {
            path: 'product/new',
            component: NewProductComponent
        },
        {
            path: 'product/:id',
            component: ProductComponent
        },
        {
            path: 'review/:id',
            component: ReviewComponent
        },
        {
            path: 'users',
            component: UsersComponent
        },
        {
            path: 'profile',
            component: ProfileComponent
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