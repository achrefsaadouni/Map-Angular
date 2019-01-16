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
import {ProjectModule} from './project/project.module';
import {ProjectService} from './project/service/project.service';
import {ClientModule} from './client/client.module';
import {NgOrganizationChartModule} from './ng-organization-chart/ng-organization-chart.module';
import { ResourceComponent } from './resource/resource/resource.component';
import { AddResourceComponent } from './resource/resource/add-resource/add-resource.component';
import { DetailsResourceComponent } from './resource/resource/details-resource/details-resource.component';
import { AffectSkillToResourceComponent } from './skill/affect-skill-to-resource/affect-skill-to-resource.component';
import { AddSkillsComponent } from './skill/add-skills/add-skills.component';
import { ListSkillsComponent } from './skill/list-skills/list-skills.component';
import { SkillsByResourceComponent } from './skill/skills-by-resource/skills-by-resource.component';

import { TestPassComponent } from './test-pass/test-pass.component';
import { RequestComponent } from './request/all-Request/request.component';
import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './chat/chat.component';
import { AddRequestComponent } from './request/add-request/add-request.component';
import { AlertComponent } from './alert/alert/alert.component';
import {AlertService} from "./alert/alert.service";

import { DayOffComponent } from './resource/day-off/day-off.component';
import {ShareDataService} from './mandate/Services/share-data.service';
import { RoomComponent } from './room/room.component';
import { MsgAlertComponent } from './request/add-request/msg-alert/msg-alert.component';
import {FinalComponent} from './final/final.component';
import {ProgressBarModule} from "angular-progress-bar";
import {StatistiquesModule} from './statistiques/statistiques.module';
import {FiltreResourcePipe} from './resource/resource/filtre-resource.pipe';
import {NotifierModule} from 'angular-notifier';
import {FullCalendarModule} from 'ng-fullcalendar';
import {FiltrePipe} from './skill/list-skills/filtre.pipe';
import {ListResourceNoArchivedComponent} from './resource/list-resource-no-archived/list-resource-no-archived.component';
import {ResourcesOfSkillComponent} from './resource/resources-of-skill/resources-of-skill.component';
import {AddDayOffComponent} from './resource/add-day-off/add-day-off.component';
import {UserProfileComponent} from './resource/user-profile/user-profile.component';



@NgModule({
  imports: [
    CommonModule,
    RouteModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MandateModule,
    NgxPaginationModule,
    ProjectModule,
    ClientModule,
    NgOrganizationChartModule,
    ProgressBarModule,
    StatistiquesModule,
    NotifierModule,
    FullCalendarModule,
  ],
  declarations: [LayoutComponent,

      TestPassComponent,
      JobrequestComponent,
      TestCategoryComponent,
      ModulesComponent,
      QuestionComponent,
      ChoicesComponent,
      ListJobrequestComponent,
      TestComponent,
      ResourceComponent,
      AddResourceComponent,
      DetailsResourceComponent,
      AffectSkillToResourceComponent,
      AddSkillsComponent,
      ListSkillsComponent,
      SkillsByResourceComponent,
      TestPassComponent,
      RequestComponent,
      MessagesComponent,
      ChatComponent,
      AddRequestComponent,
      AlertComponent,
      DayOffComponent,
      RoomComponent,
    FinalComponent,
      MsgAlertComponent,
    DayOffComponent,
    ListResourceNoArchivedComponent,
    ResourcesOfSkillComponent,
    AddDayOffComponent,
    FiltrePipe,
    FiltreResourcePipe,
    UserProfileComponent,
  ],


  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AddAuthenticationHeaderInterceptor,
    multi: true
  }, MandateService , ProjectService,ShareDataService]
})
export class PrivateModule { }
