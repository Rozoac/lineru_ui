import { NgModule } from '@angular/core';
import { ACCOUNT_ROUTES } from './account.routes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { RequestCreditComponent } from './request-credit/request-credit.component';
import { PayCreditComponent } from './pay-credit/pay-credit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        MiCuentaComponent,
        RequestCreditComponent,
        PayCreditComponent,
    ],
    exports: [
        MiCuentaComponent,
        RequestCreditComponent,
        PayCreditComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ACCOUNT_ROUTES
    ]
})
export class AccountModule { }
