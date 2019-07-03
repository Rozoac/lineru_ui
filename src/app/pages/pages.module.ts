import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { InicioComponent } from './inicio/inicio.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';


@NgModule({
    declarations: [
        InicioComponent,
        CreateAccountComponent,
        LoginComponent,
    ],
    exports: [
        InicioComponent,
    ],
    imports: [
        CommonModule,
        PAGES_ROUTES,
        FormsModule,
        ComponentsModule,
        ReactiveFormsModule,
        SharedModule,
        MatInputModule
    ]
})
export class PagesModule { }
