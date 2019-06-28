import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        loadChildren: './pages/pages.module#PagesModule'
    },
    { path: '**', component: NoPageFoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: false } );
