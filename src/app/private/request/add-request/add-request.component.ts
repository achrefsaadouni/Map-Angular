import { Component, OnInit } from '@angular/core';
import {Request} from '../../Models/Request';
import {ListRequestService} from '../service/list-request.service';


@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css'],
  providers: [ListRequestService]
})
export class AddRequestComponent implements OnInit {

  newRequest:Request = new Request();


  constructor(private lr: ListRequestService) { }

  ngOnInit() {

    console.log("test");
    console.log(localStorage);
  }

  addRequest()
  {
    this.lr.addRequest(this.newRequest,2).subscribe();
    console.log("test");
    console.log(this.newRequest);
  }


}
