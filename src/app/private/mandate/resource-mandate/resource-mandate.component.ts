import { Component, OnInit } from '@angular/core';
import {Mandate} from '../../Models/Mandate';
import {MandateService} from '../Services/mandate.service';

@Component({
  selector: 'app-resource-mandate',
  templateUrl: './resource-mandate.component.html',
  styleUrls: ['./resource-mandate.component.css']
})
export class ResourceMandateComponent implements OnInit {
  mandate: Mandate;
  test = false;
  constructor(private httpService: MandateService) {
    this.httpService.getMandate().subscribe(
      data => {
        if(data===null)
        {
          this.mandate = null;
          this.test = true;
        }
      else {
          this.mandate = data[0];
        }

      });
  }

  ngOnInit() {
  }

}
