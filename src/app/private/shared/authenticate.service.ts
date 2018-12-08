import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ApiUri} from './api-uri';

@Injectable()
export class AuthenticateService {
  constructor(private http: HttpClient) { }

  public authenticateMe(email: string, password: string): Observable<string> {
    const body = { email: email, password: password };
    console.log('Sending Authorization request ..');
    const response = this.http.post(
      ApiUri.URI + 'authentication',
      body,
      { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' },
    );
    console.log('Geting TOKEN !');
    console.log(response)
    return response;
  }

  getToken(email: string, password: string): string {
    this.authenticateMe(email, password);
    return localStorage.getItem('token');
  }



}
