import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UsuarioService,
  CreditoService,
  LoginGuardGuard,
  AmountService
 } from './service.index';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    CreditoService,
    AmountService,
    LoginGuardGuard
  ],
  declarations: []
})
export class ServiceModule { }
