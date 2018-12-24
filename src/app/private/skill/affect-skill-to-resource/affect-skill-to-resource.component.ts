import {Component, Input, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {Skill} from "../Skill";
import {SkillService} from "../service/skill.service";

@Component({
    selector: 'app-affect-skill-to-resource',
    templateUrl: './affect-skill-to-resource.component.html',
    styleUrls: ['./affect-skill-to-resource.component.css']
})
export class AffectSkillToResourceComponent implements OnInit {
    skills:Skill[];
    skillSelectedId:number;
    @Input()
    resourceId:number;

    constructor(private ss:SkillService, private router: Router ) { this.ss.getAllSkills().subscribe(data =>{console.log(data),
        this.skills = data}
    );}

    ngOnInit() {

    }
    AffectSkillToResource(){
        console.log("resouuuuuuuuuuuuuurce co : "+this.resourceId);
        console.log("skiiiiiiiiiiiiiiiiiiiiil " + this.skillSelectedId);
        this.ss.AffectSkillToResource(this.resourceId,this.skillSelectedId).subscribe(
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
