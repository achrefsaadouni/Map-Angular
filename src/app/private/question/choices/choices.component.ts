import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ChoicesService} from './service/choices.service';
import {Choice} from '../../Models/Choice';
import {stringify} from 'querystring';
import {templateJitUrl} from '@angular/compiler';
import {ActivatedRoute} from "@angular/router";
import {Question} from "../../Models/Question";

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css'],
  providers: [ChoicesService]
})
export class ChoicesComponent implements OnInit , OnChanges {
  choices: Choice[] = [];

  idQuestion: string;
  ischecked: boolean;
  Question: Question = new Question();
  NewChoice: Choice = new Choice();
  Error = true;
  idm: string;
  id: string;
  constructor( private  cs: ChoicesService , private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idQuestion = params.idq ;
      this.idm = params.idm;
      this.id = params.id;
    });

  }

  Addchoice(title, correct) {
  this.NewChoice = {
    'id': null,
    'title': title.value,
    'correct': this.ischecked
  };
  this.cs.AddChoiceToQuest(this.NewChoice, this.idQuestion).subscribe(
    choice => {
      this.choices.push(choice);
    }
  );
  title.value = null;
  correct.value = null;
  }
  ngOnInit() {
    this.cs.getquestion(this.idQuestion).subscribe(
      data => {
        this.Question = data ;
      }
    );
    this.cs.getChoicessById(this.idQuestion).subscribe(
      data => {
        this.choices = data;

      },
      error1 => {
        if (error1.status !== 200)  {
          this.Error = false;
        } else {
          this.Error = !this.Error;
        }
      }
    );

  }


  ngOnChanges() {


    }



}
