import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question} from '../../../Models/Question';
import {ApiUri} from '../../../shared/api-uri';
import {Choice} from '../../../Models/Choice';

@Injectable()
export class ChoicesService {

  constructor(private http: HttpClient) { }

  getChoicessById(id: string) {
    return this.http.get<Choice[]>(ApiUri.URI + 'choices/question/' + id );
  }
  getquestion(id: string){
    return this.http.get<Question>(ApiUri.URI + 'question/' + id );
  }
  public AddChoiceToQuest(choice: Choice , id: string) {
    const body = { title: choice.title,
      correct: choice.correct
    };
    console.log('Sending Authorization request ..');
    return  this.http.post<Choice>(
      ApiUri.URI + 'choices/new/' + id,
      body,
    );
  }


}
