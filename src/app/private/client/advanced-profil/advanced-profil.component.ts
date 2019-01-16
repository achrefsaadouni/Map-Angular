import {Component, OnInit} from '@angular/core';
import {NgOrganizationChartHelper} from '../../ng-organization-chart/ng-organization-chart-helper';
import {ClientService} from '../service/client.service';
import {MClient} from '../../Models/MClient';
import {ProjectR} from '../../Models/ProjectR';
import {ProjectService} from '../../project/service/project.service';
import {ProjectSkillR} from '../../Models/ProjectSkillR';

@Component({
  selector: 'app-advanced-profil',
  templateUrl: './advanced-profil.component.html',
  styleUrls: ['./advanced-profil.component.css'],
  providers: [ClientService, ProjectService]
})
export class AdvancedProfilComponent implements OnInit {
  CurrentId = localStorage.getItem('id');
  client: MClient;
  data = [];
  projects: ProjectR[];
  project: ProjectR;
  projectSkills: ProjectSkillR[];
  projectSkill: ProjectSkillR;
  testProject = [];
  testSkill = [];
  test = [];
  t;

  clickNode(node) {

    alert('Node \'' + node.id + '\' was clicked!');
  }

  dragNode(transfer) {
    const helper = new NgOrganizationChartHelper(this.data);
    helper.moveNode(transfer.node.id, transfer.destination.id);
    const data = helper.getData();
    this.data = data;
  }

  constructor(private httpServiceClient: ClientService, private httpServiceProject: ProjectService) {


  }


  ngOnInit() {
    this.httpServiceClient.getClientById(this.CurrentId).subscribe(
      data => {
        this.client = data;

        this.httpServiceClient.getProjectsOfClient(this.CurrentId).subscribe(
          data2 => {
            this.projects = data2;

            this.projects.map(o => {
              this.httpServiceProject.getAllProjectSkills(o.id).subscribe(
                data3 => {
                  this.projectSkills = data3;
                });
            });
          });
      });

  }

  showSkills() {


    this.testProject = this.projects.map(o => {
      return {id: o.projectName, children: this.projectSkills.map(s => {
          return {id: s.skillName , children: [] }
        })};
    });


    this.data = [
      {
        id: this.client.nameSociety,
        children: this.testProject
      }
    ];
    return this.data;
  }


}

// this.testSkill = this.projectSkills.map(s => {
//   return {id: o.projectName, children: [{id:s.skillName , children: []}]};
// });
// return {id: s.skillName, children: []};

// for ( this.t of this.testSkill) { console.log('Projects Skills 1111 ' + this.t.id) ;}


//
//
//     this.testSkill = this.projectSkills.map(s => {
//       console.log('TestSKIll 111 :' + this.testSkill);
//       console.log('TestSKIll 222 :' + this.projectSkills);
//       return {id: s.skillName, children: []};
//     });
//     console.log('TestSKIll 333 :' + this.testSkill);
//     console.log('TestSKIll 444 :' + this.projectSkills);
//   });
