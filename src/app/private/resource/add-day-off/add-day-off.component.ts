import { Component, OnInit } from '@angular/core';
import {DayOff} from "../../Models/DayOff";
import {HttpClient} from "@angular/common/http";
import {DayOffService} from "../service/day-off.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PushNotificationsService} from "../service/notification.service";
import {Resource} from "../../Models/Resource";
import {ResourceService} from "../resource/service/resource.service";

@Component({
  selector: 'app-add-day-off',
  templateUrl: './add-day-off.component.html',
  styleUrls: ['./add-day-off.component.css'],
    providers:[DayOffService , PushNotificationsService , ResourceService]
})
export class AddDayOffComponent implements OnInit {
  dayOff:DayOff = new DayOff();
date:string;
color:string;
    resourceid:number;
    nbJour:number;

    resource:Resource;
  constructor(private ds: DayOffService,
    private router: Router,
    private notifier:PushNotificationsService,
    private route: ActivatedRoute,
              private rs:ResourceService) {

      this.route.params.subscribe(params=>this.resourceid = params.id);
      this.notifier.requestPermission();
      this.rs.GetResourceById(this.resourceid).subscribe(params=>this.resource = params);

  }
    addDate(){

        this.ds.addDayOff(this.dayOff,this.resourceid).subscribe(ds=>console.log("done"));
        /*const data: Array < any >= [];
        data.push({
            'title': 'Error',
            'alertContent': 'done'
        });
        this.notifier.generateNotification(data);*/

        this.router.navigate(['/auth/dayOff/'+this.resourceid]);
}
  ngOnInit() {
  }

}
