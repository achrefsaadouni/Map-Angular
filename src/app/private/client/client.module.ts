import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientComponent } from './add-client/add-client.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfilClientComponent } from './profil-client/profil-client.component';
import { AdvancedProfilComponent } from './advanced-profil/advanced-profil.component';
import {NgOrganizationChartModule} from '../ng-organization-chart/ng-organization-chart.module';
import {NgCircleProgressModule} from 'ng-circle-progress';
import { AllClientsComponent } from './all-clients/all-clients.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOrganizationChartModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300
    }),
  ],
  declarations: [AddClientComponent, ProfilClientComponent, AdvancedProfilComponent, AllClientsComponent]
})
export class ClientModule { }
