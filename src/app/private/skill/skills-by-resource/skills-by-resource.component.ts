import {Component, Input, OnInit} from '@angular/core';
import {Resource} from "../../Models/Resource";

import {Resourceskill} from "../Resourceskill";
import {SkillService} from "../service/skill.service";
import {ResourceService} from "../../resource/resource/service/resource.service";
import {Router} from "@angular/router";
import {PushNotificationsService} from "../../resource/service/notification.service";


@Component({
    selector: 'app-skills-by-resource',
    templateUrl: './skills-by-resource.component.html',
    styleUrls: ['./skills-by-resource.component.css'],
    providers:[SkillService , PushNotificationsService]
})
export class SkillsByResourceComponent implements OnInit {
    @Input() resource:Resource;
    resourceCo:Resource;
    idResourceCon:number;

    resourceSkill: Resourceskill[];
    RateValue:number;

    constructor(private rs: ResourceService ,
                private ss:SkillService,
                private router: Router,
                private notifier:PushNotificationsService) {
        if (localStorage.length === 0) {
            this.router.navigate(['login']); }
        this.idResourceCon = Number(localStorage.getItem('id'));
        this.notifier.requestPermission();
        this.rs.GetResourceById(this.idResourceCon).subscribe(data=>{
            this.resourceCo=data;
        });

    }

    ngOnInit() {
        this.ss.getSkillOfResource(this.resource.id).subscribe(data =>{
            this.resourceSkill = data;
            console.log("doneeeeeee");


        }); }

    deleteSkillResource(idSkill){
        if(this.resourceCo.roleT==="Admin"){
            this.ss.DeleteSkillResource(this.resource.id,idSkill).subscribe(rep=>console.log("deleted"));
            let data: Array < any >= [];
            data.push({
                'title': 'Approval',
                'alertContent': 'Skill deleted'
            });
            this.notifier.generateNotification(data);
            location.reload();
        }
        let data: Array < any >= [];
        data.push({
            'title': 'Error',
            'alertContent': 'Access denied'
        });
    }

    noter(idSkill){
        console.log(idSkill);
        console.log(this.RateValue);
        if(this.resourceCo.roleT==="Admin"){
            this.ss.RateSkill(idSkill,this.resource.id,this.RateValue).subscribe(rep=>console.log("done"));

            let data: Array < any >= [];
            data.push({
                'title': 'Success',
                'alertContent': 'skill rated'
            });
            this.notifier.generateNotification(data);
            location.reload();
        }
        let data: Array < any >= [];
        data.push({
            'title': 'Error',
            'alertContent': 'Access denied'
        });
        this.notifier.generateNotification(data);
    }
}
