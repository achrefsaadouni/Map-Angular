import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Modules} from '../../Models/Modules';
import {ApiUri} from '../../shared/api-uri';

@Injectable()
export class TestserviceService {

  constructor(private http: HttpClient) { }
  getmodules() {
    return this.http.get<Modules[]>(ApiUri.URI + 'modules'  );
  }




}
