import { Component, OnInit } from '@angular/core';
import {ResourceService} from "./service/resource.service";
import {Resource} from "../../Models/Resource";

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css'],
    providers:[ResourceService]
})
export class ResourceComponent implements OnInit {
    resourceNoArchived:Resource[];
    motachercher="";
    constructor(private rs : ResourceService) { }

    ngOnInit() {
        this.rs.GetAllResourcesNoArchived().subscribe(data =>{this.resourceNoArchived = data});
    }


}
