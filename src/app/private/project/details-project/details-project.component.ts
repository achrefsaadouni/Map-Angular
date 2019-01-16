import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../service/project.service';
import {ProjectR} from '../../Models/ProjectR';
import {ActivatedRoute} from '@angular/router';
import {ProjectSkillR} from '../../Models/ProjectSkillR';
import {Http} from '@angular/http';
import {TestR} from '../../Models/TestR';
import {NgOrganizationChartHelper} from '../../ng-organization-chart/ng-organization-chart-helper';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css'],
  providers: [ProjectService]
})
export class DetailsProjectComponent implements OnInit {
  id: number;
  data = [];
  project: ProjectR;
  projectSkills: ProjectSkillR[];
  projectSkillsTest: ProjectSkillR[] = [];
  ps: ProjectSkillR;
  test: TestR [];
  // testOrg: TestOrgR [];
  nodes = [];
  options = {};
  projectx: ProjectR;
  listSkills = [];

  // s: TestOrgR [] = [];


  constructor(private httpService: ProjectService, private route: ActivatedRoute, private http: Http) {
    this.route.params.subscribe(params => {
      this.id = params.idProject;
    });

    this.httpService.getProjectById(this.id).subscribe(
      data => {
        this.project = data;
      });

    this.httpService.getAllProjectSkills(this.id).subscribe(
      data => {
        this.projectSkills = data;
      });
  }

  clickNode(node) {

    alert('Node \'' + node.id + '\' was clicked!');
  }

  dragNode(transfer) {
    const helper = new NgOrganizationChartHelper(this.data);
    helper.moveNode(transfer.node.id, transfer.destination.id);
    const data = helper.getData();
    this.data = data;
  }

  showSkills() {


    this.listSkills = this.projectSkills.map(o => {
      return {id: o.skillName, children: []}
    });


    this.data = [
      {
        id: this.project.projectName,
        children: this.listSkills
      }
    ];
    return this.data;
  }


  ngOnInit() {
    this.httpService.getAllProjectSkills(this.id).subscribe(
      data => {
        this.projectSkillsTest = data;
        this.test = this.projectSkillsTest.map(o => {
          return {id: o.percentage, name: o.skillName};
        });

        this.httpService.getProjectById(this.id).subscribe(
          x => {
            this.projectx = x;

            this.nodes = [
              {
                id: 1,
                name: this.projectx.projectName,
                children: this.test
              }
            ];
          });
      });


  }
}


