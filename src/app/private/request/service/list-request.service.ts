import { Injectable } from '@angular/core';
import {ApiUri} from '../../shared/api-uri';
import {HttpClient} from '@angular/common/http';
import {Request} from '../../Models/Request';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ListRequestService {

  constructor(private http: HttpClient) { }

  getallRequest() {
    return this.http.get<Request[]>(ApiUri.URI + 'requestss/getRequests');
  }

  /*addRequest(request:Request,idClient:number) {
    return this.http.post(ApiUri.URI + 'requestss/addRequest/'+idClient,request);
  }*/

  /** POST: add a new hero to the database */
  addRequest (request:Request,idClient:number): Observable<Request> {
    return this.http.post<Request>(ApiUri.URI + 'requestss/addRequest/'+idClient, request)
  }

}
