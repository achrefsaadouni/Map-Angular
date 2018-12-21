import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from '../private/layout/layout.component';
import {AllMandateComponent} from '../private/mandate/all-mandate/all-mandate.component';
import {AllRequestComponent} from '../private/mandate/all-request/all-request.component';
import {JobrequestComponent} from '../private/jobrequest/jobrequest.component';
import {TestCategoryComponent} from '../private/test-category/test-category.component';
import {ModulesComponent} from '../private/modules/modules.component';
import {QuestionComponent} from '../private/question/question.component';
import {ListJobrequestComponent} from '../private/list-jobrequest/list-jobrequest.component';
import {TestComponent} from '../private/test/test.component';
import {LoginComponent} from '../Public/login/login.component';
import {ListProjectComponent} from '../private/project/list-project/list-project.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
   {path: 'login' , component: LoginComponent},
  // {path: 'listProject', component: ListProjectComponent},

  {
    path: 'auth', component: LayoutComponent, children: [
      {path: 'mandate', component: AllMandateComponent},
      {path: 'request', component: AllRequestComponent},
      {path: 'jobrequest', component: JobrequestComponent},
      {path: 'category', component: TestCategoryComponent},
      {path: 'category/:id', component: ModulesComponent},
      {path: 'category/:id/:idm', component: QuestionComponent},
      {path: 'jrlist', component: ListJobrequestComponent},
      {path: 'jrlist/:idc', component: TestComponent},
      {path: 'listProject', component: ListProjectComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModuleRoutingModule {
}
