import {Component, OnInit} from '@angular/core';
import {ClientService} from '../service/client.service';
import {MClient} from '../../Models/MClient';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.css'],
  providers: [ClientService]
})
export class ProfilClientComponent implements OnInit {
  CurrentId = localStorage.getItem('id');
  client: MClient;
  passwordForm: FormGroup;
  msgError1;
  msgError2;

  constructor(private httpService: ClientService, private formBuilder: FormBuilder) {
    this.httpService.getClientById(this.CurrentId).subscribe(
      data => {
        this.client = data;
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


}
