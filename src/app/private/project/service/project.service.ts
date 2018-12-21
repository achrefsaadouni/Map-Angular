import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUri} from '../../shared/api-uri';
import {ProjectR} from '../../Models/ProjectR';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }
  getAllProjects() {
    return this.http.get<ProjectR[]>(ApiUri.URI + 'projects');
  }
}
