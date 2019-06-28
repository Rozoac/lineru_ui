import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        InicioComponent
    ],
    exports: [
        InicioComponent
    ],
    imports: [
        CommonModule,
        PAGES_ROUTES,
        FormsModule,
        SharedModule
    ]
})
export class PagesModule { }
