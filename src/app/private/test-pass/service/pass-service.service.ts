import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUri} from '../../shared/api-uri';
import {Test} from '../../Models/Test';
import {Question} from '../../Models/Question';
import {TestScore} from '../../Models/TestScore';

@Injectable()
export class PassServiceService {

  constructor(private http: HttpClient) { }
  gettestById(id: string) {
    return this.http.get<Test[]>(ApiUri.URI + 'test/' + id );
  }

  getquestions(id: number) {
    return this.http.get<Question[]>(ApiUri.URI + 'test/set/' + id );
  }
  gettesscrore(idc: string) {
    return this.http.get<TestScore[]>(ApiUri.URI + 'test/testscore/' + idc );

  }
  setscore(id: string) {
    return this.http.get(ApiUri.URI + 'test/score/' + id );
  }
}
