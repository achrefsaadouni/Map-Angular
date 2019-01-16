import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class StatRhServiceService {

  constructor(private http: HttpClient) { }
  CountNbRhByAvailability() {
    return this.http.get('http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatAdmin/CountNbRhByAvailability').
    pipe();
  }
  RhAvailableRankedByNote() {
    return this.http.get('http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatClient/RhAvailableRankedByNote').
    pipe();
  }
  RhRankedBySalary() {
    return this.http.get('http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatCandidate/RhRankedBySalary').
    pipe();
  }
}
