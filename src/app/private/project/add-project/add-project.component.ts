import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../client/service/client.service';
import {ProjectService} from '../service/project.service';
import {MClient} from '../../Models/MClient';
import {ProjectR} from '../../Models/ProjectR';
import {Skill} from '../../Models/Skill';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ClientService, ProjectService]
})
export class AddProjectComponent implements OnInit {
  selectedFiles: FileList;
  fileName: string;
  clients: MClient[];
  role: string = localStorage.getItem('role');
  project: ProjectR = new ProjectR();
  projectResponse;
  skillResponse: Skill = new Skill();
  projectTypeOption = [
    {name: 'new project', value: 'newProject'},
    {name: 'project in progress', value: 'projectInProgress'},
    {name: 'completed project', value: 'completedProject'}
  ];
  tags = [];
  tag;
  skill: Skill;
  listSkills: Skill[] = [];



  getElem(tags) {
    for (this.tag of this.tags) {
      console.log('tags 22' + this.tag.value);
    }
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.fileName = this.selectedFiles[0].name;
    console.log('selectedFiles: ' + this.fileName);
  }

  constructor(private httpServiceProject: ProjectService,private httpServiceClient: ClientService,) {
    this.httpServiceClient.getAllClient().subscribe(
      data => {
        this.clients = data;
      });
  }

  AddProject(name, startDate, endDate, address, projectType, picture, client) {
    this.project = {
      id: null,
      projectName: name.value,
      startDate: startDate.value,
      endDate: endDate.value,
      address: address.value,
      totalNumberResource: null,
      levioNumberResource: null,
      projectType: projectType.value,
      picture: this.fileName,
      organizationalChart_id: null
    };
    this.httpServiceProject.addProject(this.project, parseInt(client.value, 10)).subscribe(
      data => {
        this.projectResponse = data;
        console.log('success project' + data);
        console.log('success project' + this.projectResponse);


        for (this.tag of this.tags) {
          this.skill = {
            IdSkill: null,
            NameSkill: this.tag.value
          };
          this.httpServiceProject.addSkill(this.skill).subscribe(
            value => {
              this.skillResponse = value;
              console.log('Succcess : ' + value);
              this.httpServiceProject.getSkillById(value).subscribe(
                skill => {
                  this.listSkills.push(skill);
                });
            },
            error1 => {
              if (error1.status === 200) {
                console.log('Faileeed');
              }
            }
          );
        }
      });
  }
  backToList(){
    // this.route.navigateByUrl('/auth/listProject')
    window.location.replace('/auth/listProject');
  }



  AddSkillProject(percentage, idSKill) {
    this.httpServiceProject.addProjectSkills(this.projectResponse, idSKill.value, parseInt(percentage.value, 10)).subscribe(
      value => {
        console.log('success project Skilll');
      },
      error1 => {
        if (error1.status === 200) {
          console.log('fail skill');
        }
      });
  }
  ngOnInit() {

  }
}

// window.location.replace('/auth/addPercentageSkill/'+data);
// this.httpServiceProject.addProjectSkills(data , this.skillResponse.IdSkill).subscribe(
//   value2 => {
//     console.log('success skill') ;
//   },
//   error1 => {
//     if (error1.status === 200) {
//       console.log('fail skill') ;
//     }
//   }
// );

