import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {RouteModuleRoutingModule} from '../route-module/route-module-routing.module';
import {MandateService} from './mandate/Services/mandate.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AddAuthenticationHeaderInterceptor} from './shared/add-authentication-header-interceptor';
import {MandateModule} from './mandate/mandate.module';
import { JobrequestComponent } from './jobrequest/jobrequest.component';
import { TestCategoryComponent } from './test-category/test-category.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ModulesComponent } from './modules/modules.component';
import { QuestionComponent } from './question/question.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChoicesComponent } from './question/choices/choices.component';
import { ListJobrequestComponent } from './list-jobrequest/list-jobrequest.component';
import { TestComponent } from './test/test.component';
import { TestPassComponent } from './test-pass/test-pass.component';
import { RequestComponent } from './request/request.component';
import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  imports: [
    CommonModule,
    RouteModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MandateModule,
    NgxPaginationModule
  ],
  declarations: [LayoutComponent, JobrequestComponent, TestCategoryComponent, ModulesComponent, QuestionComponent, ChoicesComponent, ListJobrequestComponent, TestComponent, TestPassComponent, RequestComponent, MessagesComponent, ChatComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AddAuthenticationHeaderInterceptor,
    multi: true
  }, MandateService]
})
export class PrivateModule { }
