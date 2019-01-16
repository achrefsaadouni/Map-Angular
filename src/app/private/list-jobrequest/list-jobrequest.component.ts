import { Component, OnInit } from '@angular/core';
import {ListService} from './service/list.service';
import {Jobrequest} from '../Models/Jobrequest';
import {User} from '../Models/User';

@Component({
  selector: 'app-list-jobrequest',
  templateUrl: './list-jobrequest.component.html',
  styleUrls: ['./list-jobrequest.component.css'],
  providers: [ListService]
})
export class ListJobrequestComponent implements OnInit {
  listcandidate: Jobrequest[] = [];
  constructor( private ls: ListService) {




  }
  AcceptCandidate(id: number) {
  this.ls.acceptjobrequest(id).subscribe();
  }

  ngOnInit() {
    this.ls.getalljobRequest().subscribe(
      data => {
        this.listcandidate = data;
        console.log(this.listcandidate['candidate']) ;
      }
    );

  }

}
