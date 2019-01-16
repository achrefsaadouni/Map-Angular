import { Component, OnInit } from '@angular/core';
import {QuestionService} from './service/question.service';
import {Question} from '../Models/Question';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [QuestionService]
})
export class QuestionComponent implements OnInit {
  questions: Question[] = [] ;


  ShowChild = false;


  CurrentId: number;
  showadd = true;
  NewQuestion: Question = new Question();
  idm: string;
  idc: string;
  p = 1;
  constructor(private qs: QuestionService , private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idm = params.idm ;
      this.idc = params.id;
    });
   /* setInterval(() => {*/

   /* ;
    }, 500);*/



  }



  AddQuestion(title, description) {
  this.NewQuestion = {
    'id' : null,
    'title': title.value ,
    'description': description.value,
    'cu': 'true',
    'module' : null,
    'choices' : null,
    'clicked' : null

  };
  this.qs.AddModuleToCat(this.NewQuestion, this.idm).subscribe(
    data => {
      this.questions.push(data);
    }
  );
    title.value = '';
    description.value = '';
    this.showadd = !this.showadd;
  }

  showSection() {
    this.showadd = !this.showadd;
  }
  setCurrent(id) {
    this.CurrentId = id;
    this.ShowChild = true;
  }
  ngOnInit() {
    this.qs.getQuestionsById(this.idm).subscribe(
      data => {
        this.questions = data ;
      }
    );

  }


}
