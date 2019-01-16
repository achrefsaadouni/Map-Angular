import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectComponent } from './list-project/list-project.component';
import { DetailsProjectComponent } from './details-project/details-project.component';
import {NgCircleProgressModule} from 'ng-circle-progress';
import { TreeModule } from 'angular-tree-component';
import { AddProjectComponent } from './add-project/add-project.component';
import {TagInputModule} from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgOrganizationChartModule} from '../ng-organization-chart/ng-organization-chart.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ScModalModule} from 'angular-5-popup';
import { AddPercentageSkillsComponent } from './add-percentage-skills/add-percentage-skills.component';
import {RouteModuleRoutingModule} from '../../route-module/route-module-routing.module';
@NgModule({
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300
    }),
    TreeModule.forRoot(),
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ScModalModule,
    NgOrganizationChartModule,
    RouteModuleRoutingModule
  ],
  declarations: [ListProjectComponent, DetailsProjectComponent, AddProjectComponent, AddPercentageSkillsComponent]
})
export class ProjectModule { }
