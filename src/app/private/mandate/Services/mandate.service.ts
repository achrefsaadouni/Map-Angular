import { Injectable } from '@angular/core';
import { ApiUri } from '../../shared/api-uri';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Mandate} from '../../Models/Mandate';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {RequestA} from '../../Models/RequestA';
@Injectable()
export class MandateService {
  uri: string;
  constructor(private http: HttpClient) {}
  getAllMandates() {
    return this.http.get<Mandate[]>(ApiUri.URI + 'mandate');
  }
  getAllRequests() {
    return this.http.get<RequestA[]>(ApiUri.URI + 'mandate/request');
  }












  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  }
