import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PassServiceService} from './service/pass-service.service';
import {Test} from '../Models/Test';
import {Modules} from '../Models/Modules';

@Component({
  selector: 'app-test-pass',
  templateUrl: './test-pass.component.html',
  styleUrls: ['./test-pass.component.css'],
  providers: [PassServiceService]
})
export class TestPassComponent implements OnInit {
  IdCandidate: string;
  timeLeft = 60;
  module: Modules = new Modules();
  ModuleId: string;
  interval;
  CandidateTest: Test = new Test();
  constructor( private route: ActivatedRoute , private ts: PassServiceService) {
    this.route.params.subscribe(params => {
      this.IdCandidate = params.idc ;
    });
    this.ts.gettestById(this.IdCandidate).subscribe(
      data => {
        this.CandidateTest = data[0];
        console.log(this.CandidateTest);
        // this.module = this.CandidateTest.module;
       //  console.log(this.module);
      }
    );
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }



  ngOnInit() {
  }

}
