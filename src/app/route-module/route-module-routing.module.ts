import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../Public/login/login.component';
import {LayoutComponent} from '../private/layout/layout.component';
import {AllMandateComponent} from '../private/mandate/all-mandate/all-mandate.component';

const routes: Routes = [
  {path: '' , redirectTo: 'login' , pathMatch: 'full' },
  {path: 'login' , component: LoginComponent},
  {path: 'auth' , component: LayoutComponent , children : [
      {path: 'mandate' , component: AllMandateComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModuleRoutingModule { }
