import { Component, OnInit } from '@angular/core';
import {ListRequestService} from '../service/list-request.service';
import {Request} from '../../Models/Request';



@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  providers: [ListRequestService]
})
export class RequestComponent implements OnInit {


  listRequest:Request[];
  updateRequest:Request;


  constructor(private lr: ListRequestService) {
    this.lr.getallRequest().subscribe(
      data => {
        this.listRequest = data;
        console.log(
          this.listRequest
        ) ;
      }
    );
  }


  ngOnInit() {
  }

  acceptRequest(l)
  {
    this.updateRequest=l;
    this.updateRequest.accept=1;
    console.log(this.updateRequest);
    this.lr.acceptRequest(this.updateRequest.id).subscribe();
  }

}
