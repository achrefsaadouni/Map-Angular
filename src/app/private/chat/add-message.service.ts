import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Request} from '../Models/Request';
import {ApiUri} from '../shared/api-uri';
import {Observable} from 'rxjs/Observable';
import {MessageChat} from '../Models/MessageChat';

@Injectable()
export class AddMessageService {

  constructor(private http: HttpClient) { }

  getallMessage(room:string) {
    return this.http.get<MessageChat[]>(ApiUri.URI + 'messagesChat/getMessagesByDisscussion/'+room);
  }

  addMesasage (message:MessageChat): Observable<MessageChat> {
    return this.http.post<MessageChat>(ApiUri.URI + 'messagesChat/addMessageChat', message)
  }


}
