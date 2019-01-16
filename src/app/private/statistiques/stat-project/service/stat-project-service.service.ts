import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class StatProjectServiceService {
  urlUsers: string = 'http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatCandidate/CountCadidateResultByTypeTest';

  constructor(private http: HttpClient) { }
  BeneficeByProject() {
    return this.http.get('http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatAdmin/BeneficeByProject').
    pipe();
  }
}
