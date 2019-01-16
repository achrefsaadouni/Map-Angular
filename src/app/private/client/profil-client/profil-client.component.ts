import {Component, OnInit} from '@angular/core';
import {ClientService} from '../service/client.service';
import {MClient} from '../../Models/MClient';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../../project/service/project.service';
import {ProjectSkillR} from '../../Models/ProjectSkillR';
import {NgOrganizationChartHelper} from '../../ng-organization-chart/ng-organization-chart-helper';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.css'],
  providers: [ClientService,ProjectService]
})
export class ProfilClientComponent implements OnInit {
  CurrentId = localStorage.getItem('id');
  client: MClient;
  passwordForm: FormGroup;
  projects = [] ;
  data = [];
  projectSkills: ProjectSkillR[] = [] ;
  role: string = localStorage.getItem('role');
  listSkills = [] ;

  constructor(private httpService: ClientService, private  httpServiceProject: ProjectService, private formBuilder: FormBuilder) {
    this.httpService.getClientById(this.CurrentId).subscribe(
      data => {
        this.client = data;
      });

    this.httpService.getProjectsOfClient(this.CurrentId).subscribe(
      data => {
        this.projects = data;
      });

  }

  verifyOldPassword(group: FormGroup) {
    const oldPass = group.controls.oldPassword.value;
    return oldPass === this.client.password ? null : {notSame: true};
  }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      confirmPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      oldPassword: ['', Validators.required]
    });
  }




  ChangePassword(oldPassword, newPassword, confirmPassword) {
    this.client = {
      id: parseInt(this.CurrentId, 10),
      firstName: this.client.firstName,
      lastName: this.client.lastName,
      clientCategory: this.client.clientCategory,
      nameSociety: this.client.nameSociety,
      logo: this.client.logo,
      address: this.client.address,
      email: this.client.email,
      clientType: this.client.clientType,
      latitude: this.client.latitude,
      longitude: this.client.longitude,
      password: newPassword.value
    };
    this.httpService.updatePasswordClient(this.client).subscribe(
      value => {
        window.location.replace('/auth/profilClient/' + this.CurrentId);
      },
      error1 => {
        if (error1.status === 200) {
          window.location.replace('/auth/profilClient/' + this.CurrentId);
        }
      }
    );
  }


  getSkills(id) {
    this.httpServiceProject.getAllProjectSkills(id).subscribe(
      data => {
        this.projectSkills = data;
      });
    return   this.projectSkills ;
  }


}
