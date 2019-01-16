import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class StatClientServiceService {

  constructor(private http: HttpClient) { }
  BeneficeByClient() {
    return this.http.get('http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatAdmin/BeneficeByClient').
    pipe();
  }

}
