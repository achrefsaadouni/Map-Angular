import { Component, OnInit } from '@angular/core';
import {RequestA} from '../../Models/RequestA';
import {MandateService} from '../Services/mandate.service';
import {ShareDataService} from '../Services/share-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})
export class MyRequestComponent implements OnInit {
  requests: RequestA[];
  mot = '';
  p = 1;
  constructor(private httpService: MandateService,private share: ShareDataService, private route: Router) {
    }

  ngOnInit() {
    this.httpService.getAllRequestsClient().subscribe(
      data => {
        this.requests = data;
      });
  }

  validate(r:RequestA) {
    this.share.setData(r);
    this.route.navigate(['auth/validateRequest']);
  }
}
