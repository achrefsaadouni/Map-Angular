import {Component, OnInit} from '@angular/core';
import {Mandate} from '../../Models/Mandate';
import {MandateService} from '../Services/mandate.service';


@Component({
  selector: 'app-all-mandate',
  templateUrl: './all-mandate.component.html',
  styleUrls: ['./all-mandate.component.css']
})
export class AllMandateComponent implements  OnInit {
mandates: Mandate[];
  constructor(private httpService: MandateService) {
    this.httpService.getAllMandates().subscribe(
      data => {
        this.mandates = data;
      });
  }

  ngOnInit() {

  }


}
