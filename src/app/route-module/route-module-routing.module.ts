import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../Public/login/login.component';
import {LayoutComponent} from '../private/layout/layout.component';
import {AllMandateComponent} from '../private/mandate/all-mandate/all-mandate.component';
import {AllRequestComponent} from '../private/mandate/all-request/all-request.component';
import {JobrequestComponent} from '../private/jobrequest/jobrequest.component';
import {TestCategoryComponent} from '../private/test-category/test-category.component';
import {ModulesComponent} from '../private/modules/modules.component';
import {QuestionComponent} from '../private/question/question.component';
import {ListJobrequestComponent} from '../private/list-jobrequest/list-jobrequest.component';
import {TestComponent} from '../private/test/test.component';

import {ResourceComponent} from "../private/resource/resource/resource.component";
import {DetailsResourceComponent} from "../private/resource/resource/details-resource/details-resource.component";
import {ListSkillsComponent} from "../private/skill/list-skills/list-skills.component";
import {AddSkillsComponent} from "../private/skill/add-skills/add-skills.component";

import {TestPassComponent} from '../private/test-pass/test-pass.component';

const routes: Routes = [
  {path: '' , redirectTo: 'login' , pathMatch: 'full' },
  {path: 'login' , component: LoginComponent},

  {path: 'auth' , component: LayoutComponent , children : [
      {path: 'mandate' , component: AllMandateComponent},
      {path: 'request' , component: AllRequestComponent},
      {path : 'jobrequest' , component: JobrequestComponent},
      {path : 'jobrequest/test/:idc' , component: TestPassComponent},
      {path : 'category' , component: TestCategoryComponent},
      {path : 'category/:id' , component: ModulesComponent},
      {path : 'category/:id/:idm' , component: QuestionComponent},
      {path: 'list' , component: ListJobrequestComponent},
      {path: 'list/:idc' , component: TestComponent},
      {path : 'resource' , component: ResourceComponent},
      {path : 'resourceById/:id' , component: DetailsResourceComponent},
      {path : 'listSkills' , component: ListSkillsComponent},
      {path : 'AddSkill' , component: AddSkillsComponent},
      {path : 'AddResource' , component: AddResourceComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModuleRoutingModule { }
