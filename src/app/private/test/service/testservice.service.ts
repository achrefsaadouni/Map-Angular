import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Modules} from '../../Models/Modules';
import {ApiUri} from '../../shared/api-uri';
import {Test} from '../../Models/Test';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class TestserviceService {

  constructor(private http: HttpClient) { }
  getmodules() {
    return this.http.get<Modules[]>(ApiUri.URI + 'modules'  );
  }
  public AddTest(test: Test ) {
    const body = { testDeadLine: test.testDeadLine};
    console.log('Sending Authorization request ..');
    return  this.http.post<Test>(
      ApiUri.URI + 'test/new/',
      body,
    );
  }

   AddModule(idt: number , idm: string , idc: string): Observable<any[]> {

    let response1  =  this.http.get(
      ApiUri.URI + 'test/new/' + idt + '/' + idm,
    );
    let response2  = this.http.get(
      ApiUri.URI + 'test/affect/' + idt + '/' + idc,
    );
     return Observable.forkJoin([response1, response2 ]);

   }


}
