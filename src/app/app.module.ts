import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
