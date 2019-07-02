import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: InicioComponent,
    },
    {
        path: 'registro',
        component: CreateAccountComponent,
    },
    {
        path: 'iniciar-sesion',
        component: LoginComponent,
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
