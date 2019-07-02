import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderPrimaryComponent } from './header-primary/header-primary.component';
import {MatIconModule} from '@angular/material/icon';
import { ComponentsModule } from '../components/components.module';
import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';
@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        MatIconModule,
        ComponentsModule
    ],
    declarations: [
        HeaderPrimaryComponent,
        HeaderSecondaryComponent,
    ],
    exports: [
       HeaderPrimaryComponent,
       HeaderSecondaryComponent
    ]
})
export class SharedModule { }
