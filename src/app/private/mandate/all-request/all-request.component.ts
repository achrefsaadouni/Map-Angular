import { Component, OnInit } from '@angular/core';
import {MandateService} from '../Services/mandate.service';
import {RequestA} from '../../Models/RequestA';
import {Router} from '@angular/router';
import {ShareDataService} from '../Services/share-data.service';


@Component({
  selector: 'app-all-request',
  templateUrl: './all-request.component.html',
  styleUrls: ['./all-request.component.css']
})
export class AllRequestComponent implements OnInit {
  requests: RequestA[];
  mot = '';
  p = 1;
  constructor(private httpService: MandateService,private route: Router,private shared:ShareDataService) {
    this.httpService.getAllRequests().subscribe(
    data => {
      this.requests = data;
    }); }

  ngOnInit() {
  }

  trait(m:RequestA) {
    this.shared.setData(m);
    this.route.navigate(["auth/HandleRequest"])
  }
}
