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
import {RequestComponent} from '../private/request/all-Request/request.component';
import {MessagesComponent} from '../private/messages/messages.component';
import {ChatComponent} from '../private/chat/chat.component';
import {AddRequestComponent} from '../private/request/add-request/add-request.component';
import {ListProjectComponent} from '../private/project/list-project/list-project.component';
import {DetailsProjectComponent} from '../private/project/details-project/details-project.component';
import {AddClientComponent} from '../private/client/add-client/add-client.component';
import {ProfilClientComponent} from '../private/client/profil-client/profil-client.component';
import {AdvancedProfilComponent} from '../private/client/advanced-profil/advanced-profil.component';
import {AllGpsComponent} from '../private/mandate/all-gps/all-gps.component';
import {ArchivedComponent} from '../private/mandate/archived/archived.component';
import {ResourceMandateComponent} from '../private/mandate/resource-mandate/resource-mandate.component';
import {MyRequestComponent} from '../private/mandate/my-request/my-request.component';
import {ValidateRequestComponent} from '../private/mandate/validate-request/validate-request.component';
import {MapComponent} from '../private/mandate/map/map.component';
import {HandleRequestComponent} from '../private/mandate/handle-request/handle-request.component';
import {MyMandateComponent} from '../private/mandate/my-mandate/my-mandate.component';
import {RoomComponent} from '../private/room/room.component';
import {ChoicesComponent} from '../private/question/choices/choices.component';
import {FinalComponent} from '../private/final/final.component';
import {StatAdminComponent} from '../private/statistiques/stat-admin/stat-admin.component';
import {StatCandidateComponent} from '../private/statistiques/stat-candidate/stat-candidate.component';
import {StatClientComponent} from '../private/statistiques/stat-client/stat-client.component';
import {StatRhComponent} from '../private/statistiques/stat-rh/stat-rh.component';
import {StatProjectComponent} from '../private/statistiques/stat-project/stat-project.component';
import {RecommandationComponent} from '../private/statistiques/recommandation/recommandation.component';
import {ResourceComponent} from '../private/resource/resource/resource.component';
import {DetailsResourceComponent} from '../private/resource/resource/details-resource/details-resource.component';
import {ListSkillsComponent} from '../private/skill/list-skills/list-skills.component';
import {AddSkillsComponent} from '../private/skill/add-skills/add-skills.component';
import {AddResourceComponent} from '../private/resource/resource/add-resource/add-resource.component';
import {ListResourceNoArchivedComponent} from '../private/resource/list-resource-no-archived/list-resource-no-archived.component';
import {DayOffComponent} from '../private/resource/day-off/day-off.component';
import {ResourcesOfSkillComponent} from '../private/resource/resources-of-skill/resources-of-skill.component';
import {AddDayOffComponent} from '../private/resource/add-day-off/add-day-off.component';
import {UserProfileComponent} from '../private/resource/user-profile/user-profile.component';
import {AddProjectComponent} from '../private/project/add-project/add-project.component';
import {AddPercentageSkillsComponent} from '../private/project/add-percentage-skills/add-percentage-skills.component';
import {AllClientsComponent} from '../private/client/all-clients/all-clients.component';

const routes: Routes = [
  {path: '' , redirectTo: 'login' , pathMatch: 'full' },
  {path: 'login' , component: LoginComponent},

  {path: 'auth' , component: LayoutComponent , children : [
    // *******************Mandate************************** //
      {path: 'allMandate' , component: AllMandateComponent},
      {path: 'request' , component: AllRequestComponent},
      {path: 'gps' , component: AllGpsComponent},
      {path: 'archived' , component: ArchivedComponent},
      {path: 'Mandate' , component: ResourceMandateComponent},
      {path: 'myMandate' , component: MyMandateComponent},
      {path: 'myRequest' , component: MyRequestComponent},
      {path: 'validateRequest' , component: ValidateRequestComponent},
      {path: 'map' , component: MapComponent},
      {path: 'HandleRequest' , component: HandleRequestComponent},
      {path : 'jobrequest' , component: JobrequestComponent},
      {path : 'jobrequest/test/:idc' , component: TestPassComponent},
      {path : 'goodbye' , component: FinalComponent},
      {path : 'category' , component: TestCategoryComponent},
      {path : 'category/:id' , component: ModulesComponent},
      {path : 'category/:id/:idm' , component: QuestionComponent},
      {path : 'category/:id/:idm/:idq' , component: ChoicesComponent},
      /*  {path: 'choices/:idq' , component: ChoicesComponent},*/
      {path: 'list' , component: ListJobrequestComponent},

      {path : 'jobrequest' , component: JobrequestComponent},
      {path : 'category' , component: TestCategoryComponent},
      {path : 'category/:id' , component: ModulesComponent},
      {path : 'category/:id/:idm' , component: QuestionComponent},
      {path: 'list' , component: ListJobrequestComponent},
      {path: 'requestAdmin' , component: RequestComponent},
      {path: 'messages' , component: MessagesComponent},
      {path: 'chat' , component: RoomComponent},
      {path: 'list/:idc' , component: TestComponent},
      {path: 'addRequest' , component: AddRequestComponent},
      {path: 'jrlist' , component: ListJobrequestComponent},
      {path: 'jrlist/:idc' , component: TestComponent},
      {path: 'listProject', component: ListProjectComponent},
      {path: 'detailsProject/:idProject', component: DetailsProjectComponent},
      {path: 'addClient', component: AddClientComponent},
      {path: 'profilClient/:idClient', component: ProfilClientComponent},
      {path: 'advancedProfilClient', component: AdvancedProfilComponent},

      {path :'StatAdmin', component: StatAdminComponent},
      {path :'StatCandidate', component: StatCandidateComponent},
      {path :'StatClient', component: StatClientComponent},
      {path :'StatRh', component: StatRhComponent},
      {path :'StatProject', component: StatProjectComponent},
      {path :'Rec', component: RecommandationComponent},
      {path : 'resource' , component: ResourceComponent},
      {path : 'resourceById/:id' , component: DetailsResourceComponent},
      {path : 'listSkills' , component: ListSkillsComponent},
      {path : 'AddSkill' , component: AddSkillsComponent},
      {path : 'AddResource' , component: AddResourceComponent},
      {path : 'resourceArchive' , component: ListResourceNoArchivedComponent},
      {path : 'dayOff/:id' , component: DayOffComponent},
      {path : 'resourcesSkill/:id' , component: ResourcesOfSkillComponent},
      {path : 'AddDayOff/:id' , component: AddDayOffComponent},
      {path : 'userCo' , component: UserProfileComponent},
      {path: 'listProject', component: ListProjectComponent},
      {path: 'detailsProject/:idProject', component: DetailsProjectComponent},
      {path: 'addClient', component: AddClientComponent},
      {path: 'profilClient/:idClient', component: ProfilClientComponent},
      {path: 'advancedProfilClient', component: AdvancedProfilComponent},
      {path: 'addProject', component: AddProjectComponent},
      {path: 'addPercentageSkill/:idProject', component: AddPercentageSkillsComponent},
      {path: 'listClients', component: AllClientsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModuleRoutingModule { }
