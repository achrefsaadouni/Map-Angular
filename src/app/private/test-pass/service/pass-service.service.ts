import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUri} from '../../shared/api-uri';
import {Test} from '../../Models/Test';

@Injectable()
export class PassServiceService {

  constructor(private http: HttpClient) { }
  gettestById(id: string) {
    return this.http.get<Test[]>(ApiUri.URI + 'test/' + id );
  }
}
