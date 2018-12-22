import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUri} from '../../shared/api-uri';
import {Jobrequest} from '../../Models/Jobrequest';

@Injectable()
export class ListService {

  constructor(private http: HttpClient) { }


  getalljobRequest() {
    return this.http.get<Jobrequest[]>(ApiUri.URI + 'jobrequest');
  }
  acceptjobrequest(id: number) {
    return this.http.get(ApiUri.URI + 'jobrequest/Accept/' + id);
  }


}
