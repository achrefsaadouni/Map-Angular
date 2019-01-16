import { Component, OnInit } from '@angular/core';
import {Mandate} from '../../Models/Mandate';
import {MandateService} from '../Services/mandate.service';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.css']
})
export class ArchivedComponent implements OnInit {

  mandates: Mandate[];
  constructor(private httpService: MandateService) {
    this.httpService.getAllArchived().subscribe(
      data => {
        this.mandates = data;
      });
  }
  ngOnInit() {
  }

}
