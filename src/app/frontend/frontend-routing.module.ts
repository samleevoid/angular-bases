import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzaComponent } from './pizza/pizza.component';
import { FrontendComponent } from './frontend.component';


const routes: Routes = [
  {
    path: '',
    component: FrontendComponent,
    children: [
      { path: '', component: HomeComponent, data: { titulo: 'Home' } },
      { path: 'pizza', component: PizzaComponent, data: { titulo: 'Pizza' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
