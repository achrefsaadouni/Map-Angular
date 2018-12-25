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
import {TestPassComponent} from '../private/test-pass/test-pass.component';
import {RequestComponent} from '../private/request/request.component';
import {MessagesComponent} from '../private/messages/messages.component';
import {ChatComponent} from '../private/chat/chat.component';



import {TestPassComponent} from '../private/test-pass/test-pass.component';
import {AddResourceComponent} from "../private/resource/resource/add-resource/add-resource.component";



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
      {path: 'requestAdmin' , component: RequestComponent},
      {path: 'messages' , component: MessagesComponent},
      {path: 'chat' , component: ChatComponent},
      {path: 'list/:idc' , component: TestComponent},
      {path: 'request' , component: AllRequestComponent}

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModuleRoutingModule { }
