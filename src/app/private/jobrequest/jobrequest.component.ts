import { Component, OnInit } from '@angular/core';
import {JobrequestService} from './service/jobrequest.service';
import {Category} from '../Models/Category';
import {Jobrequest} from '../Models/Jobrequest';

@Component({
  selector: 'app-jobrequest',
  templateUrl: './jobrequest.component.html',
  styleUrls: ['./jobrequest.component.css'],
  providers: [JobrequestService]
})
export class JobrequestComponent implements OnInit {
    CurrentId = localStorage.getItem('id');
    MyName = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
    Specialities: Category[];
   Request = true;
    NewJobRequest: Jobrequest = new Jobrequest();
    MyJobRequest: Jobrequest[];
  constructor(private js: JobrequestService) {

  }
  Set(speciality) {
    this.NewJobRequest = {
      'id': null,
      'stateType' : null,
      'sentdate': null,
      'speciality' : speciality.value,
      'candidate': null
    };
    this.js.NewRequest(this.NewJobRequest , this.CurrentId).subscribe(
      data => {
        window.location.replace('/auth/jobrequest');

      },
      error1 => {
          if (error1.status === 200) {
            window.location.replace('/auth/jobrequest');
          }
      }
      );

  }

  ngOnInit() {

    this.js.getCategories().subscribe(
      data => {
        this.Specialities = data;
      }
    );
    this.js.showMyrequest(this.CurrentId).subscribe(
      data => {
        this.MyJobRequest = data;
        if (this.MyJobRequest.length === 0) {
          this.Request = false;
        }
      }

    );

  }

}
