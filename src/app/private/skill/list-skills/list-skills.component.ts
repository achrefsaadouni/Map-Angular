import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {SkillService} from "../service/skill.service";
import {Skill} from "../Skill";

import {ResourceService} from "../../resource/resource/service/resource.service";
import {Resource} from "../../Models/Resource";
import {PushNotificationsService} from "../../resource/service/notification.service";



@Component({
    selector: 'app-list-skills',
    templateUrl: './list-skills.component.html',
    styleUrls: ['./list-skills.component.css'],
    providers:[SkillService , PushNotificationsService ,ResourceService]

})
export class ListSkillsComponent implements OnInit {
    listSkills:Skill[];
    motachercher="";
    afficherModif:boolean = false;
    skillToUpdate:Skill;

    resourceCo:Resource;
    idResourceCon:number;


    constructor(private rs: ResourceService ,private ss:SkillService, private router: Router, private notifier:PushNotificationsService ) {
        if (localStorage.length === 0) {
            this.router.navigate(['login']); }
        this.idResourceCon = Number(localStorage.getItem('id'));

        this.ss.getAllSkills().subscribe(data =>{this.listSkills = data;
            console.log(data)});
        this.notifier.requestPermission();
        this.rs.GetResourceById(this.idResourceCon).subscribe(data=>{
            this.resourceCo=data;
        });


    }

    ngOnInit() {

    }
    DeleteSkill(id){
        if(this.resourceCo.roleT==="Admin"){
            this.ss.DeleteSkill(id).subscribe(
                skill => console.log("done"),
                error => {
                    if (error.status === 200) {
                        setTimeout(() => {
                            let data: Array < any >= [];
                            data.push({
                                'title': 'Deleted',
                                'alertContent': 'skill has been deleted'
                            });
                            this.notifier.generateNotification(data);
                            this.ss.getAllSkills().subscribe(data =>{this.listSkills = data;
                                console.log(data)});
                        }, 2000);
                    }
                });}
                else{
        let data: Array < any >= [];
        data.push({
            'title': 'Error',
            'alertContent': 'Access denied'
        });
        this.notifier.generateNotification(data);
    }}

    ShowModif(x){
        this.afficherModif = this.afficherModif !== true;
        this.skillToUpdate=x ;
        console.log(this.skillToUpdate.idSkill);
        console.log(this.skillToUpdate.nameSkill);
    }


    UpdateSkill(){
        if(this.resourceCo.roleT==="Admin"){
            console.log(this.skillToUpdate.idSkill);
            console.log(this.skillToUpdate.nameSkill);
            this.ss.UpdateSkill(this.skillToUpdate).subscribe(
                skill => console.log("done"),
                error => {
                    if (error.status === 200) {
                        setTimeout(() => {
                            let data: Array < any >= [];
                            data.push({
                                'title': 'Updated',
                                'alertContent': 'Updated with success'
                            });
                            this.notifier.generateNotification(data);
                            this.ss.getAllSkills().subscribe(data =>{this.listSkills = data;
                                console.log(data)});
                        }, 2000);
                    }
                });
        }
        else{
        let data: Array < any >= [];
        data.push({
            'title': 'Error',
            'alertContent': 'Access denied'
        });
        this.notifier.generateNotification(data);
    }}

}
