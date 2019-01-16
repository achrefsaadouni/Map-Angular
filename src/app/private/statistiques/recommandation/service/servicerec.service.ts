import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ServicerecService {

  constructor(private http: HttpClient) { }
  StackOverFlow() {
    return this.http.get('http://localhost:13703/api/Stack');
  }
}
