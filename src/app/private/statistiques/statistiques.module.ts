import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatAdminComponent } from './stat-admin/stat-admin.component';
import { StatCandidateComponent } from './stat-candidate/stat-candidate.component';
import { StatClientComponent } from './stat-client/stat-client.component';
import { StatRhComponent } from './stat-rh/stat-rh.component';
import { StatProjectComponent } from './stat-project/stat-project.component';
import { RecommandationComponent } from './recommandation/recommandation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatAdminComponent, StatCandidateComponent, StatClientComponent, StatRhComponent, StatProjectComponent, RecommandationComponent]
})
export class StatistiquesModule { }
