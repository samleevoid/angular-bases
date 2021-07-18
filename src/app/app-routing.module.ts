import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { BackendRoutingModule } from './backend/backend-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { FrontendRoutingModule } from './frontend/frontend-routing.module';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BackendRoutingModule,
    AuthRoutingModule,
    FrontendRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
