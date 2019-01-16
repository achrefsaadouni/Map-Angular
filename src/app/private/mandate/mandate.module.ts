import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { AllMandateComponent } from './all-mandate/all-mandate.component';
import { AllRequestComponent } from './all-request/all-request.component';
import { ArchivedComponent } from './archived/archived.component';
import { MyMandateComponent } from './my-mandate/my-mandate.component';
import { ResourceMandateComponent } from './resource-mandate/resource-mandate.component';
import { MyRequestComponent } from './my-request/my-request.component';
import { ValidateRequestComponent } from './validate-request/validate-request.component';
import {ProgressBarModule} from "angular-progress-bar";
import { MapComponent } from './map/map.component';
import { HandleRequestComponent } from './handle-request/handle-request.component'
import {NgxPaginationModule} from 'ngx-pagination';
import {DragulaModule} from 'ng2-dragula';
import { FiltrePipe } from './Filtre/filtre.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AllGpsComponent} from './all-gps/all-gps.component';


@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    NgxPaginationModule,
    DragulaModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  declarations: [AllMandateComponent, AllRequestComponent, ArchivedComponent, MyMandateComponent, ResourceMandateComponent, MyRequestComponent, ValidateRequestComponent, MapComponent, HandleRequestComponent,AllGpsComponent, FiltrePipe],


})
export class MandateModule { }
