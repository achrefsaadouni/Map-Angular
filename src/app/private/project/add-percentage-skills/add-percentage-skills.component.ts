import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../service/project.service';
import {ActivatedRoute} from '@angular/router';
import {Skill} from '../../Models/Skill';

@Component({
  selector: 'app-add-percentage-skills',
  templateUrl: './add-percentage-skills.component.html',
  styleUrls: ['./add-percentage-skills.component.css'],
  providers: [ProjectService]
})
export class AddPercentageSkillsComponent implements OnInit {
  id: number;
  listSkill: Skill[] ;
  skill: Skill ;
  percentage = 50  ;
  pp: any ;
  constructor(private route: ActivatedRoute , private httpService: ProjectService) {
    this.route.params.subscribe(params => {
      this.id = params.idProject;
    });

    this.httpService.getSkillsProject(this.id).subscribe(
      data => {
        this.listSkill = data;
      });



  }
  // UpdateSkillProject(percentage , pn ){
  //   // for (this.skill of this.listSkill) {
  //     this.httpService.updatePercentageSkills(this.id,pn.value, percentage.value).subscribe(
  //       value => {
  //         console.log('success skill') ;
  //       },
  //       error1 => {
  //         if (error1.status === 200) {
  //           console.log('fail skill');
  //         }
  //       });
  //  // }
  // }

  GetValue(pp){
    console.log('Value: ' + pp)  ;
    console.log('Value 2 : ' + pp.value)  ;
  }

  ngOnInit() {
    console.log('ID: ' + this.id) ;
  }

}
