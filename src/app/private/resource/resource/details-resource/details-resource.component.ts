import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Resource} from '../../../Models/Resource';

import {Skill} from '../../../Models/Skill';
import {ResourceService} from "../service/resource.service";
import {SkillService} from "../../../skill/service/skill.service";
@Component({
    selector: 'app-details-resource',
    templateUrl: './details-resource.component.html',
    styleUrls: ['./details-resource.component.css'],
    providers: [ResourceService , SkillService]
})
export class DetailsResourceComponent implements OnInit {
    resourceChoisi:Resource;
    resourceid:number;
    bol: boolean=false;
    moyenne:number;

    constructor(private route: ActivatedRoute,
                private rs:ResourceService,
                private ss:SkillService,
                private router: Router) {
        this.route.params.subscribe(params=>this.resourceid = params.id);
        console.log("id connectééééééééééééééééééééééééééééééé" +this.resourceid);
        this.rs.moyenneResource(this.resourceid).subscribe(data =>console.log("done"));
        this.rs.GetResourceById(this.resourceid).subscribe(data =>this.resourceChoisi=data);


    }

    onDetails(id:number){
        this.router.navigate(['id', id]);
    }


    showSkills(){
        this.bol = this.bol !== true;
    }
    ngOnInit() {



    }

    archiver(){
        this.rs.ArchiverResource(this.resourceid).subscribe(
            resource => console.log("done"),
            error => {
                if (error.status === 200) {
                    setTimeout(() => {
                        this.router.navigate(['/auth/resource']);
                    }, 2000);
                }
            });
    }

}
