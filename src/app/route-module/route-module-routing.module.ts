import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../Public/login/login.component';
import {LayoutComponent} from '../private/layout/layout.component';
import {AllMandateComponent} from '../private/mandate/all-mandate/all-mandate.component';
import {AllRequestComponent} from '../private/mandate/all-request/all-request.component';
/*{path: '' , redirectTo: 'mandate' , pathMatch: 'full' }*/

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'auth' , component: LayoutComponent , children : [
      {path: 'mandate' , component: AllMandateComponent},
      {path: 'request' , component: AllRequestComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModuleRoutingModule { }
