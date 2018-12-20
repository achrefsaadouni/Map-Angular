import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question} from '../../Models/Question';
import {Modules} from '../../Models/Modules';
import {ApiUri} from '../../shared/api-uri';

@Injectable()
export class QuestionService {

  constructor(private http: HttpClient) { }

  public AddModuleToCat(question: Question , id: string) {
    const body = { title: question.title,
      description: question.description,
      cu: question.cu
    };
    console.log('Sending Authorization request ..');
    return  this.http.post<Question>(
      ApiUri.URI + 'question/new/' + id,
      body,
    );
  }
  getQuestionsById(id: string) {
    return this.http.get<Question[]>(ApiUri.URI + 'question/module/' + id );
  }

}
