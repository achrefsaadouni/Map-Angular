import { Component, OnInit } from '@angular/core';
import {Resource} from "../../Models/Resource";
import {ResourceService} from "../resource/service/resource.service";


@Component({
    selector: 'app-list-resource-no-archived',
    templateUrl: './list-resource-no-archived.component.html',
    styleUrls: ['./list-resource-no-archived.component.css'],
    providers:[ResourceService]
})
export class ListResourceNoArchivedComponent implements OnInit {
    resourceArchived:Resource[];
    constructor(private rs : ResourceService) { }
    motachercher="";
    ngOnInit() {
        this.rs.GetAllResourcesArchived().subscribe(res =>{this.resourceArchived = res});
    }

}
