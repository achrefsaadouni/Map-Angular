import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../service/project.service';
import {ProjectR} from '../../Models/ProjectR';
import {ActivatedRoute} from '@angular/router';
import {ProjectSkillR} from '../../Models/ProjectSkillR';
import {Http} from '@angular/http';
import {TestR} from '../../Models/TestR';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css'],
  providers: [ProjectService]
})
export class DetailsProjectComponent implements OnInit {
  id: number;
  project: ProjectR;
  projectSkills: ProjectSkillR[];
  projectSkillsTest: ProjectSkillR[] = [];
  ps: ProjectSkillR;
  test: TestR [];
  // testOrg: TestOrgR [];
  nodes = [];
  options = {};
  projectx: ProjectR;
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


