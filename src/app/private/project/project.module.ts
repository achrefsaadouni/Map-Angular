import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectComponent } from './list-project/list-project.component';
import { DetailsProjectComponent } from './details-project/details-project.component';
import {NgCircleProgressModule} from 'ng-circle-progress';
import { TreeModule } from 'angular-tree-component';

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
    TreeModule.forRoot()
  ],
  declarations: [ListProjectComponent, DetailsProjectComponent]
})
export class ProjectModule { }
