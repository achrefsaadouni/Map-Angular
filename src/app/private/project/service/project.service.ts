import {Injectable} from '@angular/core';
import {ProjectR} from '../../Models/ProjectR';
import {ApiUri} from '../../../Public/shared/api-uri';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {ProjectSkillR} from '../../Models/ProjectSkillR';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class ProjectService {
  projectSkills: ProjectSkillR[];
  pageResponse: ProjectSkillR;

  constructor(private http: HttpClient ) {
  }

  getAllProjects() {
    return this.http.get<ProjectR[]>(ApiUri.URI + 'projects');
  }
  getProjectById(id) {
    return this.http.get<ProjectR>(ApiUri.URI + 'projects?projectId=' + id);
  }
  getAllProjectSkills(id) {
    return this.http.get<ProjectSkillR[]>(ApiUri.URI + 'projectSkills/getProjectSkills?idProject=' + id);
  }

}
