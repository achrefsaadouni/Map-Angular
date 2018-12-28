import { Component, OnInit } from '@angular/core';
import {MandateService} from '../Services/mandate.service';
import {RequestA} from '../../Models/RequestA';


@Component({
  selector: 'app-all-request',
  templateUrl: './all-request.component.html',
  styleUrls: ['./all-request.component.css']
})
export class AllRequestComponent implements OnInit {
  requests: RequestA[];
  constructor(private httpService: MandateService) {
    this.httpService.getAllRequests().subscribe(
    data => {
      this.requests = data;
    }); }

  ngOnInit() {
  }

}
