import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class StatCandidateServiceService {

  constructor(private http: HttpClient) { }
  CountCadidateResultByTypeTest() {
    return this.http.get('http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatCandidate/CountCadidateResultByTypeTest');
  }
  CountNbCandidateByState() {
    return this.http.get('http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatAdmin/CountNbCandidateByState').
    pipe();
  }
  SkillsRecommended() {
    return this.http.get('http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatCandidate/SkillsRecommended').
    pipe();
  }
  CandidateRankedByNbJobRequest() {
    return this.http.get('http://127.0.0.1:18080/Map-JavaEE-web/MAP/StatClient/CandidateRankedByNbJobRequest').
    pipe();
  }
}
