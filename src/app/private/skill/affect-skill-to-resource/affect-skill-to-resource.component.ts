import {Component, Input, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {Skill} from "../Skill";
import {SkillService} from "../service/skill.service";

import {Resource} from "../../Models/Resource";
import {ResourceService} from "../../resource/resource/service/resource.service";
import {PushNotificationsService} from "../../resource/service/notification.service";


@Component({
    selector: 'app-affect-skill-to-resource',
    templateUrl: './affect-skill-to-resource.component.html',
    styleUrls: ['./affect-skill-to-resource.component.css'],
    providers:[SkillService , PushNotificationsService , ResourceService]
})
export class AffectSkillToResourceComponent implements OnInit {
    skills:Skill[];
    skillSelectedId:number;
    resourceCo:Resource;
    idResourceCon:number;
    @Input()
    resourceId:number;

    constructor(private rs: ResourceService ,
                private ss:SkillService,
                private router: Router,
                private notifier:PushNotificationsService) {
        if (localStorage.length === 0) {
            this.router.navigate(['login']); }
        this.idResourceCon = Number(localStorage.getItem('id'));
        this.ss.getAllSkills().subscribe(data =>{console.log(data),
            this.skills = data}
        );
        this.notifier.requestPermission();
        this.rs.GetResourceById(this.idResourceCon).subscribe(data=>{
            this.resourceCo=data;
        });}

    ngOnInit() {

    }
    AffectSkillToResource(){
        if(this.resourceCo.roleT==="Admin"){
            console.log("resouuuuuuuuuuuuuurce co : "+this.resourceId);
            console.log("skiiiiiiiiiiiiiiiiiiiiil " + this.skillSelectedId);
            this.ss.AffectSkillToResource(this.resourceId,this.skillSelectedId).subscribe(
                resource => console.log("done"),
                error => {
                    if (error.status === 200) {
                        setTimeout(() => {
                            let data: Array < any >= [];
                            data.push({
                                'title': 'Affected',
                                'alertContent': 'the skill has been affected to the resource'
                            });
                            this.notifier.generateNotification(data);
                            this.rs.GetResourceById(this.idResourceCon).subscribe(data=>{
                                this.resourceCo=data;
                            });

                        }, 2000);
                    }
                });


        }
        else{        let data: Array < any >= [];
        data.push({
            'title': 'Error',
            'alertContent': 'Acces denied'
        });
        this.notifier.generateNotification(data);
    }
    }

}
