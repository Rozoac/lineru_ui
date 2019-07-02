import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LendingComponent } from './lending/lending.component';
import { BaseAmountComponent } from './base-amount/base-amount.component';



@NgModule({
    declarations: [
        LendingComponent,
        BaseAmountComponent
    ],
    exports: [
        LendingComponent,
        BaseAmountComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatInputModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule
    ]
})
export class ComponentsModule { }
