import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { BackendModule } from './backend/backend.module';
import { AuthModule } from './auth/auth.module';
import { FrontendModule } from './frontend/frontend.module';

import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BackendModule,
    AuthModule,
    FrontendModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' + (window.location.pathname.split('/')[1] || '') }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
