import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PassServiceService} from './service/pass-service.service';
import {Test} from '../Models/Test';
import {Modules} from '../Models/Modules';
import {Question} from '../Models/Question';
import {TestScore} from '../Models/TestScore';

@Component({
  selector: 'app-test-pass',
  templateUrl: './test-pass.component.html',
  styleUrls: ['./test-pass.component.css'],
  providers: [PassServiceService]
})
export class TestPassComponent {
  IdCandidate: string;
  currentChoice: boolean;
  TestState: TestScore = new TestScore();
  started = true;
  timeLeft = 60;
  p = 1;
  clicked = false;
  hidden = true;
  QuestionNbrs = 0;
  QuestionList: Question[];
  module: Modules = new Modules();
  hideTestButton = true;
  interval;
  CandidateTest: Test = new Test();

  constructor(private route: ActivatedRoute, private ts: PassServiceService) {
   setInterval(() => {
      this.ts.gettesscrore(this.IdCandidate).subscribe(
        data => {
          this.TestState = data[0];
        }
      );
    }, 500);
    this.route.params.subscribe(params => {
      this.IdCandidate = params.idc;
    });
    this.ts.gettestById(this.IdCandidate).subscribe(
      data => {
        this.CandidateTest = data[0];
        this.module = this.CandidateTest.modules[0];
        console.log(this.module);
      }
    );
    this.ts.gettesscrore(this.IdCandidate).subscribe(
      data => {
        this.TestState = data[0];
      }
    );


  }


  start() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        /*this.timeLeft = 60 ;*/
        window.location.replace('/auth/goodbye');
      }
    }, 1000);

    this.hidden = false;
    this.hideTestButton = false;
    this.ts.getquestions(this.module.id).subscribe(

      data => {
        this.QuestionList = data;
        this.QuestionList.forEach( (element) => {
          element.clicked = false;
        });
        /*this.QuestionList[0].clicked = false;
        this.QuestionList[1].clicked = false;
        this.QuestionList[2].clicked = false;*/

      }
    );
    console.log(this.module.id);

  }

  scoreChange(choix) {
    this.currentChoice = choix;
    console.log(this.currentChoice);
  }

  setscore(question: Question) {
  question.clicked = true ;
    if (this.currentChoice === true) {
      this.ts.setscore(this.IdCandidate).subscribe();
    }
    this.p++;
    this.QuestionNbrs++;
    if ( this.QuestionNbrs === 5) {
      window.location.replace('/auth/goodbye');
    }

  }

}
