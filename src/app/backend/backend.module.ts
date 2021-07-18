import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendRoutingModule } from './backend-routing.module';
import { BackendComponent } from './backend.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { UsersComponent } from './users/users.component';
import { ComandaComponent } from './comanda/comanda.component';
import { ProductesComponent } from './productes/productes.component';
import { DetallComponent } from './productes/detall/detall.component';
import { SearchComponent } from './productes/search/search.component';

@NgModule({
  declarations: [
    BackendComponent,
    DashboardComponent,
    UsersComponent,
    ComandaComponent,
    ProductesComponent,
    DetallComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BackendRoutingModule,
    SharedModule
  ],
  exports: [
    // SharedModule
  ]
})
export class BackendModule { }
