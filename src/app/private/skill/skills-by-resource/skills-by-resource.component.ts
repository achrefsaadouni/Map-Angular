import {Component, Input, OnInit} from '@angular/core';
import {Resource} from "../../Models/Resource";

import {Resourceskill} from "../Resourceskill";
import {SkillService} from "../service/skill.service";

@Component({
    selector: 'app-skills-by-resource',
    templateUrl: './skills-by-resource.component.html',
    styleUrls: ['./skills-by-resource.component.css'],
    providers:[SkillService]
})
export class SkillsByResourceComponent implements OnInit {
    @Input() resource:Resource;


    resourceSkill: Resourceskill[];
    RateValue:number;

    constructor(private ss : SkillService) { }

    ngOnInit() {
        this.ss.getSkillOfResource(this.resource.id).subscribe(data =>{
            this.resourceSkill = data;
            console.log("doneeeeeee");


        }); }

    deleteSkillResource(idSkill){

        this.ss.DeleteSkillResource(this.resource.id,idSkill).subscribe(rep=>console.log("deleted"));
    }

    noter(idSkill){
        console.log(idSkill);
        console.log(this.RateValue);
        this.ss.RateSkill(idSkill,this.resource.id,this.RateValue).subscribe(rep=>console.log("done"));

    }
}
