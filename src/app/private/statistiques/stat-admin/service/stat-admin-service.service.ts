import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { map } from 'rxjs/operators';
@Injectable()
export class StatAdminServiceService {
  urlUsers: string = 'http://jsonplaceholder.typicode.com/users';
  url1: string = 'http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatCandidate/CountCadidateResultByTypeTest';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.urlUsers);
  }

  CountCadidateResultByTypeTest() {
    return this.http.get('http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatCandidate/CountCadidateResultByTypeTest');
  }

  CountClientByCategory() {
    return this.http.get('http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatAdmin/CountClientByCategory');
  }

  CountPersonByRegion(){
    return this.http.get('http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatAdmin/CountPersonByRegion/client').
    pipe();

  }
  NbProjectEnded(){
    return this.http.get('http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatAdmin/CountNbProjectEnded').
    pipe();
  }
  NbProjectNotEnded(){
    return this.http.get('http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatAdmin/CountNbProjectNotEnded').
    pipe();
  }
}
