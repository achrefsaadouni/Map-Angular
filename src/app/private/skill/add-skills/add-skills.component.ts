import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SkillService} from "../service/skill.service";
import {Skill} from "../skill";

import {Resource} from "../../Models/Resource";
import {ResourceService} from "../../resource/resource/service/resource.service";
import {PushNotificationsService} from "../../resource/service/notification.service";



@Component({
    selector: 'app-add-skills',
    templateUrl: './add-skills.component.html',
    styleUrls: ['./add-skills.component.css'],
    providers:[SkillService , PushNotificationsService , ResourceService]
})
export class AddSkillsComponent implements OnInit {
    Skills:Skill[];
    skill:Skill = new Skill();

    resourceCo:Resource;
    idResourceCon:number;

    constructor(private rs: ResourceService ,private ss: SkillService ,
                private http: HttpClient ,
                private route: Router ,
                private notifier:PushNotificationsService
    ) {
        if (localStorage.length === 0) {
            this.route.navigate(['login']); }
        this.idResourceCon = Number(localStorage.getItem('id'));
        this.notifier.requestPermission();
        this.ss.getAllSkills().subscribe(
            liste =>{this.Skills = liste}
        );
        console.log(this.Skills);
        this.rs.GetResourceById(this.idResourceCon).subscribe(data=>{
            this.resourceCo=data;
        });
    }

    ngOnInit() {

    }


    AddSkill(){
        if(this.resourceCo.roleT==="Admin"){
            this.ss.AddSkill(this.skill).subscribe(
                skill => this.Skills.push(this.skill),

                error => {
                    if (error.status === 200) {
                        setTimeout(() => {

                            const data: Array < any >= [];
                            data.push({
                                'title': 'Success',
                                'alertContent': 'Skills added with success'
                            });
                            this.notifier.generateNotification(data);
location.reload();
                        }, 2000);
                    }else{

                    }
                });

        }
        else{
        const data: Array < any >= [];
        data.push({
            'title': 'Error',
            'alertContent': 'Access denied'
        });
        this.notifier.generateNotification(data);
    }}
}
