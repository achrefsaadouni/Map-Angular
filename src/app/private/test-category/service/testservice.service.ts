import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../Models/Category';
import { ApiUri } from '../../shared/api-uri';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import {AddAuthenticationHeaderInterceptor} from '../../shared/add-authentication-header-interceptor';
import {User} from '../../Models/User';

@Injectable()
export class TestserviceService {

  constructor(private http: HttpClient) {

  }

  public AddCategory(category: Category) {
    const body = { name: category.name};
    console.log('Sending Authorization request ..');
    return  this.http.post<Category>(
      ApiUri.URI + 'categories/new',
      body,
    );
  }


  getCategories() {
    return this.http.get<Category[]>(ApiUri.URI + 'categories');
  }

}
