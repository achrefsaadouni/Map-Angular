import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DayOff} from "../../Models/DayOff";
import {ApiUri} from "../../shared/api-uri";

@Injectable()
export class DayOffService {
    resourceId :number ;
  constructor(private http:HttpClient) { }

  getDayOff(resourceid:number){
   // return this.http.get<DayOff>(ApiUri.URI+'DayOff/listDayOff?resourceId='+resourceid,null)
      const data = this.http.get<DayOff>(ApiUri.URI+'DayOff/listDayOff?resourceId='+resourceid);
      return (data);
  }


  addDayOff(dayOff:DayOff, resourceid:number){
      const body = {
          reason: dayOff.reason,
          start:dayOff.startDate,
          end:dayOff.endDate,
          stateType:dayOff.stateType,
          title:dayOff.typeDayOff

      };

      return this.http.post<DayOff>(ApiUri.URI+'DayOff/affecter?resourceId='+resourceid,body);
  }

}
