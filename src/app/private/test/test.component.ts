import { Component, OnInit } from '@angular/core';
import {TestserviceService} from './service/testservice.service';
import {Modules} from '../Models/Modules';
import {ActivatedRoute} from '@angular/router';
import {Test} from '../Models/Test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [TestserviceService]
})
export class TestComponent implements OnInit {
  modules: Modules[];
  show = true;
  CandidateId: string;
  IdModule: string;
  NewTest: Test = new Test();
  ResponseTest: Test = new Test();
  constructor( private ts: TestserviceService ,  private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.CandidateId = params.idc ;
    });
  this.ts.getmodules().subscribe(
    data => {
      this.modules = data;
    }
  );
  }
  Addtest(deadline) {
  this.NewTest = {
    'id': null,
    'testDeadLine': deadline.value,
    'module' : null
  };
    this.ts.AddTest(this.NewTest).subscribe(
      data => {
        this.ResponseTest = data ;
      }
    );
    this.show = !this.show;


  }
  confirmTest() {
    this.ts.AddModule(this.ResponseTest.id, this.IdModule , this.CandidateId).subscribe();

  }
  getid(id) {
    this.IdModule = id ;
}
  ngOnInit() {


  }

}
