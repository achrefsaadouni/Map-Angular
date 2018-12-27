import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ChoicesService} from './service/choices.service';
import {Choice} from '../../Models/Choice';
import {stringify} from 'querystring';
import {templateJitUrl} from '@angular/compiler';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css'],
  providers: [ChoicesService]
})
export class ChoicesComponent implements OnInit , OnChanges {
  choices: Choice[];
  @Input()
  idQuestion: string;
  @Input()
  ShowMe: boolean;
  @Output()
  Send = new EventEmitter(this.ShowMe);
  ischecked: boolean;
  NewChoice: Choice = new Choice();
  Error = true;
  constructor( private  cs: ChoicesService) {

  }

  Addchoice(title, correct) {
  this.NewChoice = {
    'id': null,
    'title': title.value,
    'correct': this.ischecked
  };
  this.cs.AddChoiceToQuest(this.NewChoice, this.idQuestion).subscribe(
    data => {
      this.choices.push(this.NewChoice);
    }
  );
  title.value = null;
  correct.value = null;
  }
  ngOnInit() {

  }
  HideChoices() {

    this.ShowMe = !this.ShowMe;
  }

  ngOnChanges() {
    this.choices = null ;
    if (this.idQuestion) {
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

  }

}
