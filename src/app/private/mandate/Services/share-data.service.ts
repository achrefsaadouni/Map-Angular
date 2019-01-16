import { Injectable } from '@angular/core';
import {RequestA} from '../../Models/RequestA';
import {Mandate} from '../../Models/Mandate';

@Injectable()
export class ShareDataService {
  public sharedData: RequestA;
  public mandate:Mandate;
  constructor() {}
  setData (data: RequestA) {
    this.sharedData = data;
  }
  setMandate(m:Mandate)
  {
    this.mandate = m;
  }
  getMandate(){
    return this.mandate;
  }
  getData () {
    return this.sharedData;
  }
}
