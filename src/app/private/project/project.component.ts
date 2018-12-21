import { Component, OnInit } from '@angular/core';
import {ProjectService} from './service/project.service';
import {ProjectR} from '../Models/ProjectR';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  projects: ProjectR[];
  constructor(private httpService: ProjectService) {
    this.httpService.getAllProjects().subscribe(
      data => {
        this.projects = data;
      });
  }

  ngOnInit() {
  }

}
