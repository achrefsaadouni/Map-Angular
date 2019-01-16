import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class StatServiceService {
  urlUsers: string = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(this.urlUsers);
  }
}
