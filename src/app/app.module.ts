import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';1
import { PagesComponent } from './pages/pages.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
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
