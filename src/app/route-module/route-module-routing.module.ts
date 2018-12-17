import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../Public/login/login.component';
import {LayoutComponent} from '../private/layout/layout.component';
import {AllMandateComponent} from '../private/mandate/all-mandate/all-mandate.component';
import {AllRequestComponent} from '../private/mandate/all-request/all-request.component';
import {JobrequestComponent} from '../private/jobrequest/jobrequest.component';
import {TestCategoryComponent} from '../private/test-category/test-category.component';
const routes: Routes = [
  {path: '' , redirectTo: 'login' , pathMatch: 'full' },
  {path: 'login' , component: LoginComponent},
  {path: 'auth' , component: LayoutComponent , children : [
      {path: 'mandate' , component: AllMandateComponent},
      {path: 'request' , component: AllRequestComponent},
      {path : 'jobrequest' , component: JobrequestComponent},
      {path : 'category' , component: TestCategoryComponent}

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModuleRoutingModule { }
