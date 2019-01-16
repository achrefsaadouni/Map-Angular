import {Injectable} from '@angular/core';
import {ProjectR} from '../../Models/ProjectR';
import {ApiUri} from '../../../Public/shared/api-uri';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {ProjectSkillR} from '../../Models/ProjectSkillR';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {Skill} from '../../Models/Skill';

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
  addProject(project : ProjectR , idClient){
    const body = {
      projectName: project.projectName,
      startDate: project.startDate,
      endDate: project.endDate,
      address: project.address,
      totalNumberResource:project.totalNumberResource,
      levioNumberResource:project.levioNumberResource,
      picture: project.picture,
      projectType: project.projectType ,
      organizationalChart_id: project.organizationalChart_id
    };
    return this.http.post<ProjectR>(ApiUri.URI + 'projects/addProjectAngular?idClient=' + idClient, body) ;
  }
  assignProjectToClient(idClient , idProject) {
    const body = {
    };
    return this.http.post<ProjectR>(ApiUri.URI + 'projects/assignPtoCAngular?idClient='+idClient+'&idProject='+idProject , body) ;
  }
  addSkill(skill: Skill){
    const body = {
      NameSkill: skill.NameSkill
    };
    return this.http.post<Skill>(ApiUri.URI + 'skills' , body) ;
  }
  addProjectSkills(idProject , idSkill , percentage ) {
    const body = {
    };
    return this.http.post<ProjectSkillR>(ApiUri.URI + 'skills/addSkillProject?idProject='+idProject+'&idSkill='+idSkill+'&percentage='+percentage , body) ;
  }
  getSkillsProject(id){
    return this.http.get<Skill[]>(ApiUri.URI + 'skills?idProject=' + id);
  }
  // updatePercentageSkills(idProject , idSkill , percentage) {
  //   const body = {
  //   };
  //   return this.http.post<ProjectSkillR>(ApiUri.URI + 'skills/updateSkillProject?idProject='+idProject+'&idSkill='+idSkill+'&percentage='+percentage , body) ;
  // }
  getSkillById(idSkill) {
    return this.http.get<Skill>(ApiUri.URI + 'skills/getSkillById?idSkill=' + idSkill);
  }

}
