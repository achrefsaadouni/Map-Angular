import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../Models/Category';
import {ApiUri} from '../../shared/api-uri';
import {Jobrequest} from '../../Models/Jobrequest';

@Injectable()
export class JobrequestService {

  constructor(private http: HttpClient) { }
  public NewRequest(jobrequest: Jobrequest , id: string) {
    const body = { speciality: jobrequest.speciality
    };
    console.log('Sending Authorization request ..');
    return  this.http.post<Jobrequest>(
      ApiUri.URI + 'jobrequest/new/' + id,
      body,
    );
  }
  showMyrequest(id: string) {
    return this.http.get<[Jobrequest]>(ApiUri.URI + 'jobrequest/ShowMyReq/' + id );

  }
  getCategories() {
    return this.http.get<Category[]>(ApiUri.URI + 'categories');
  }}
