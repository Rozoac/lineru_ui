import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderPrimaryComponent } from './header-primary/header-primary.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
    ],
    declarations: [
        HeaderPrimaryComponent
    ],
    exports: [
       HeaderPrimaryComponent
    ]
})
export class SharedModule { }
