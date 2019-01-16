import {Component, OnInit} from '@angular/core';
import {ClientService} from '../service/client.service';
import {MClient} from '../../Models/MClient';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
  providers: [ClientService]
})
export class AddClientComponent implements OnInit {
   client: MClient = new MClient();
  role: string = localStorage.getItem('role');
   clientTypeOption = [
    { name: 'new client', value: 'newClient' },
    { name: 'current client', value: 'currentClient' },
    { name: 'end contarct', value: 'endContract'}
  ] ;
  clientCategoryOption = [
    { name: 'public client', value: 'publicClient' },
    { name: 'private client', value: 'privateClient' }
  ] ;
  selectedFiles: FileList;
  fileName: string;
  model;

  clients: any[] ;
  constructor(private httpService: ClientService ) {
    this.model = { sex : 'publicClient'};
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.fileName = this.selectedFiles[0].name;
    console.log('selectedFiles: ' + this.fileName );
  }

  AddClient(firstName, lastName, clientType , nameSociety, address , clientCategory , logo,email) {
    this.client = {
      id: 159,
      firstName: firstName.value,
      lastName: lastName.value,
      clientCategory: this.model.sex,
      nameSociety: nameSociety.value,
      logo: this.fileName,
      address: address.value,
      email: email.value,
      clientType: clientType.value,
      latitude: 0,
      longitude: 0,
      password: this.client.password
    };
    this.httpService.AddClient(this.client).subscribe(
      value => {
         window.location.replace('/auth/listClients');
       // this.route.redirectTo('/auth/listClients');
      },
      error1 => {
        if (error1.status === 200) {
           window.location.replace('/auth/listClients');
         // this.route.navigateByUrl('/auth/listClients');

        }
      }
    );
  }


  ngOnInit() {
  }

}
