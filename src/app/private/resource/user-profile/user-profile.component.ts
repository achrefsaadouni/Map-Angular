import { Component, OnInit } from '@angular/core';
import {PushNotificationsService} from "../service/notification.service";
import {ResourceService} from "../resource/service/resource.service";
import {Resource} from "../../Models/Resource";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
    providers: [ResourceService,PushNotificationsService]
})
export class UserProfileComponent implements OnInit {
    resourceCo:Resource;
    role:string;
    idResourceCon:number;
  constructor(private rs : ResourceService,private router: Router,
              private notifier:PushNotificationsService) {
      if (localStorage.length === 0) {
          this.router.navigate(['login']); }
      this.notifier.requestPermission();
      this.idResourceCon= Number(localStorage.getItem('id'));
      this.rs.GetResourceById(this.idResourceCon).subscribe(data=>{
          this.resourceCo=data;
      this.role = "Resource";});
  }

  ngOnInit() {
  }

}
