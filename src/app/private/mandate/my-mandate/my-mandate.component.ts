import { Component, OnInit } from '@angular/core';
import {Mandate} from '../../Models/Mandate';
import {MandateService} from '../Services/mandate.service';

@Component({
  selector: 'app-my-mandate',
  templateUrl: './my-mandate.component.html',
  styleUrls: ['./my-mandate.component.css']
})
export class MyMandateComponent implements OnInit {
  mandates: Mandate[];
  mot = '';
  p = 1;
  constructor(private httpService: MandateService) {
    this.httpService.getMyMandates().subscribe(
      data => {
        this.mandates = data;
      });
  }
  ngOnInit() {
  }

}
