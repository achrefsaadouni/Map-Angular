import {Component, Input, OnChanges, OnInit} from '@angular/core';
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
  check: string;
  NewChoice: Choice = new Choice();
  constructor( private  cs: ChoicesService) {

  }

  Addchoice(title, correct) {
    console.log(this.check);

  this.NewChoice = {
    'id': null,
    'title': title.value,
    'correct': true
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


  ngOnChanges() {
    if (this.idQuestion) {
      this.cs.getChoicessById(this.idQuestion).subscribe(
        data => {
          this.choices = data;

        }
      );
    }

  }

}
