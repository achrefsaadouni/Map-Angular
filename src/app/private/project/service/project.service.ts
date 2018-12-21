import {Injectable} from '@angular/core';
import {ProjectR} from '../../Models/ProjectR';
import {ApiUri} from '../../../Public/shared/api-uri';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  getAllProjects() {
    return this.http.get<ProjectR[]>(ApiUri.URI + 'projects');
  }
}
