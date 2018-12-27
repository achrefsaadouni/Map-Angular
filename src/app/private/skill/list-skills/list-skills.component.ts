import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {SkillService} from "../service/skill.service";
import {Skill} from "../Skill";


@Component({
    selector: 'app-list-skills',
    templateUrl: './list-skills.component.html',
    styleUrls: ['./list-skills.component.css'],
    providers:[SkillService]
})
export class ListSkillsComponent implements OnInit {
    listSkills:Skill[];
    motachercher="";
    afficherModif:boolean = false;
    skillToUpdate:Skill;

    constructor(private ss:SkillService, private router: Router ) {
        this.ss.getAllSkills().subscribe(data =>{this.listSkills = data;
        console.log(data)});

    }

    ngOnInit() {

    }
    DeleteSkill(id){
        this.ss.DeleteSkill(id).subscribe(
            skill => console.log("done"),
            error => {
                if (error.status === 200) {
                    setTimeout(() => {
                        this.router.navigate(['/auth/listSkills']);
                    }, 2000);
                }
            });
    }

    ShowModif(x){
        this.afficherModif = this.afficherModif !== true;
        this.skillToUpdate=x ;
        console.log(this.skillToUpdate.idSkill);
        console.log(this.skillToUpdate.nameSkill);
    }


    UpdateSkill(){
        console.log(this.skillToUpdate.idSkill);
        console.log(this.skillToUpdate.nameSkill);
        this.ss.UpdateSkill(this.skillToUpdate).subscribe(
            skill => console.log("done"),
            error => {
                if (error.status === 200) {
                    setTimeout(() => {
                        this.router.navigate(['/auth/listSkills']);
                    }, 2000);
                }
            });
    }

}
