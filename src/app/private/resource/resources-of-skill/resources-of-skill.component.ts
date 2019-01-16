import { Component, OnInit } from '@angular/core';
import {SkillService} from "../../skill/service/skill.service";
import {Resource} from "../../Models/Resource";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-resources-of-skill',
  templateUrl: './resources-of-skill.component.html',
  styleUrls: ['./resources-of-skill.component.css'],
    providers:[SkillService]
})
export class ResourcesOfSkillComponent implements OnInit {
listResource:Resource[];
skillId:number;
  constructor(private rs:SkillService,
              private route: ActivatedRoute,
              private router: Router) {
      this.route.params.subscribe(params=>this.skillId = params.id);
    this.rs.getResourcesOfSkill(this.skillId).subscribe(data=>{this.listResource = data;
    console.log(data);
    });
  }

  ngOnInit() {
  }

}
