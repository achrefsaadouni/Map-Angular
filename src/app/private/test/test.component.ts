import { Component, OnInit } from '@angular/core';
import {TestserviceService} from './service/testservice.service';
import {Modules} from '../Models/Modules';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [TestserviceService]
})
export class TestComponent implements OnInit {
  modules: Modules[];
  CandidateId: string;
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
  getid(id) {
    console.log(id);
}
  ngOnInit() {
  }

}
