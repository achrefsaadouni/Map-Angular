import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUri} from '../../shared/api-uri';
import {Modules} from '../../Models/Modules';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Category} from '../../Models/Category';

@Injectable()
export class ModuleService {
  constructor(private http: HttpClient) { }

  public AddModuleToCat(module: Modules , id: string) {
    const body = { title: module.title};
    console.log('Sending Authorization request ..');
    return  this.http.post<Modules>(
      ApiUri.URI + 'modules/new/' + id,
      body,
    );
  }
  getModulesByCat(id: string) {
    return this.http.get<Modules[]>(ApiUri.URI + 'modules/show/' + id );
  }
}
