import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientComponent } from './add-client/add-client.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfilClientComponent } from './profil-client/profil-client.component';
import { AdvancedProfilComponent } from './advanced-profil/advanced-profil.component';
import {NgOrganizationChartModule} from '../ng-organization-chart/ng-organization-chart.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOrganizationChartModule
  ],
  declarations: [AddClientComponent, ProfilClientComponent, AdvancedProfilComponent]
})
export class ClientModule { }
