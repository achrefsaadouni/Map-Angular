import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiUri} from './api-uri';
import {User} from '../../private/Models/User';

@Injectable()
export class AuthenticateService {
  constructor(private http: HttpClient) { }

  public authenticateMe(email: string, password: string) {
    const body = { login: email, password: password };
    console.log('Sending Authorization request ..');
    return  this.http.post<User>(
      ApiUri.URI + 'authentication',
       body,
      { headers: new HttpHeaders().set('Content-Type', 'application/json').set('authorization', 'accept'), responseType: 'json' },
    );
  }


}
