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
  // client = {
  //       firstName: 'TTTESSSST',
  //       lastName: 'TEEESTTS',
  //      // clientCategory: 'newClient',
  //       nameSociety: 'OORORORJOGRJ',
  //       logo: 'dlfdlloggo',
  //       address: 'ariana',
  //       email: 'baslybilel@gmail.com',
  //       clientType: 'privateClient',
  // }
  clients: any[] ;
  constructor(private httpService: ClientService) {
    this.model = { sex : 'publicClient'};
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.fileName = this.selectedFiles[0].name;
    console.log('selectedFiles: ' + this.fileName );
  }

  AddClient(firstName, lastName, clientType , nameSociety, address , clientCategory , logo) {
    console.log('Clienenet : IPJZJEZJEJOOKEEEY');
    this.client = {
      id: 159,
      firstName: firstName.value,
      lastName: lastName.value,
      clientCategory: this.model.sex,
      nameSociety: nameSociety.value,
      logo: this.fileName,
      address: address.value,
      email: 'baslybilel@gmail.com',
      clientType: clientType.value,
      latitude: 0,
      longitude: 0,
      password: this.client.password
    };
    console.log('Clienenet : '  + this.client);
    this.httpService.AddClient(this.client).subscribe(
      value => {
        window.location.replace('/auth/addClient');
      },
      error1 => {
        if (error1.status === 200) {
          window.location.replace('/auth/addClient');
        }
      }
    );
  }
  // AddClient() {
  //   this.httpService.AAddClient(this.client).subscribe(client =>
  //   this.clients.unshift(this.client));
  // }

  ngOnInit() {
  }

}
