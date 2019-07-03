import { RouterModule, Routes } from '@angular/router';
import { RequestCreditComponent } from './request-credit/request-credit.component';
import { PayCreditComponent } from './pay-credit/pay-credit.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { AccountComponent } from './account.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';


const accountRoutes: Routes = [
    {
        path: '',
        component: MiCuentaComponent,
        canActivate: [LoginGuardGuard]
    },
    {
        path: 'pagar-credito',
        component: PayCreditComponent,
        canActivate: [LoginGuardGuard]
    },
    {
        path: 'solicitar-credito',
        component: RequestCreditComponent,
        canActivate: [LoginGuardGuard]
    }
];


export const ACCOUNT_ROUTES = RouterModule.forChild( accountRoutes );
