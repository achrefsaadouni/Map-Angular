import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../service/project.service';
import {ProjectR} from '../../Models/ProjectR';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css'],
  providers: [ProjectService]
})
export class ListProjectComponent implements OnInit {

  projects: ProjectR[];
  constructor(private httpService: ProjectService ) {
    this.httpService.getAllProjects().subscribe(
      data => {
        this.projects = data;
      });

  }

  ngOnInit() {
  }

}
