import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { AccountComponent } from './account/account.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        loadChildren: './pages/pages.module#PagesModule'
    },
    {
        path: 'cuenta',
        component: AccountComponent,
        loadChildren: './account/account.module#AccountModule'
    },
    { path: '**', component: NoPageFoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: false } );
