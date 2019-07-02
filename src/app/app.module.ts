import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AccountComponent } from './account/account.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AccountComponent,
    NoPageFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTES,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
