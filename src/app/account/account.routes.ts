import { RouterModule, Routes } from '@angular/router';
import { RequestCreditComponent } from './request-credit/request-credit.component';
import { PayCreditComponent } from './pay-credit/pay-credit.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { AccountComponent } from './account.component';


const accountRoutes: Routes = [
    {
        path: '',
        component: MiCuentaComponent,
    },
    {
        path: 'pagar-credito',
        component: PayCreditComponent,
    },
    {
        path: 'solicitar-credito',
        component: RequestCreditComponent,
    }
];


export const ACCOUNT_ROUTES = RouterModule.forChild( accountRoutes );
