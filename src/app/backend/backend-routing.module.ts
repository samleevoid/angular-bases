import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendComponent } from './backend.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ComandaComponent } from './comanda/comanda.component';
import { ProductesComponent } from './productes/productes.component';
import { DetallComponent } from './productes/detall/detall.component';
import { SearchComponent } from './productes/search/search.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: BackendComponent,
    children: [
      { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'users', component: UsersComponent, data: { titulo: 'Usuaris' } },
      { path: 'comanda/:id', component: ComandaComponent, data: { titulo: 'Comanda' } },
      { path: 'productes', component: ProductesComponent, data: { titulo: 'Productes' } },
      { path: 'productes/detall/:id', component: DetallComponent, data: { titulo: 'Detall Producte' } },
      { path: 'productes/search/:terme', component: SearchComponent, data: { titulo: 'Cercar' } }
    ]
  },
  // {
  //   path: 'users', 
  //   component: PagesComponent,
  //   children: [
  //     { path: '', component: UsersComponent, data: { titulo: 'Usuaris' } },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
