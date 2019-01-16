import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUri} from '../../../Public/shared/api-uri';
import {MClient} from '../../Models/MClient';
import {ProjectR} from '../../Models/ProjectR';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) {
  }

  AddClient(client: MClient) {
    const body = {
      firstName: client.firstName,
      lastName: client.lastName,
      clientCategory: client.clientCategory,
      clientType: client.clientType,
      nameSociety: client.nameSociety,
      logo: client.logo,
      address: client.address,
      email: client.email
    };
    return this.http.post<MClient>(ApiUri.URI + 'clients', body);
  }

  getClientById(id) {
    return this.http.get<MClient>(ApiUri.URI + 'clients/getById?idClient=' + id);
  }
  getProjectsOfClient(id) {
    return this.http.get<ProjectR[]>(ApiUri.URI + 'projects?idClient=' + id);
  }

  updatePasswordClient(client: MClient) {
    const body = {
      id: client.id,
      password: client.password
    };
    return this.http.put(ApiUri.URI + 'clients/updatePassword' , body);
  }

  getAllClient(){
    return this.http.get<MClient[]>(ApiUri.URI + 'clients/getClients');
  }

}
