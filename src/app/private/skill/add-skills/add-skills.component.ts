import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SkillService} from "../service/skill.service";
import {Skill} from "../skill";
import {AlertService} from "../../alert/alert.service";


@Component({
    selector: 'app-add-skills',
    templateUrl: './add-skills.component.html',
    styleUrls: ['./add-skills.component.css'],
    providers:[SkillService]
})
export class AddSkillsComponent implements OnInit {
    Skills:Skill[];
    skill:Skill = new Skill();
    constructor(private ss: SkillService ,
                private http: HttpClient ,
                private route: Router ,
                private alertService: AlertService) {
        this.ss.getAllSkills().subscribe(
            liste =>{this.Skills = liste}
        );
        console.log(this.Skills);
    }

    ngOnInit() {

    }


    AddSkill(){

        this.ss.AddSkill(this.skill).subscribe(
            skill => this.Skills.push(this.skill),

            error => {
                if (error.status === 200) {
                    setTimeout(() => {
                        this.alertService.success("added with success");
                        this.route.navigate(['/auth/listSkills']);
                    }, 2000);
                }else{
                    this.alertService.error("can't be added");
                }
            });

    }
}
