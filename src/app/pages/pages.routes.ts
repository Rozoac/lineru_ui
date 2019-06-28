import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: InicioComponent,
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
