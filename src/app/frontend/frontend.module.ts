import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { HomeComponent } from './home/home.component';
import { FrontendComponent } from './frontend.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [HomeComponent, FrontendComponent, PizzaComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    SharedModule
  ]
})
export class FrontendModule { }
