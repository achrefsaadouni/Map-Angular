import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ApiUri} from '../../shared/api-uri';
import {Resourceskill} from "../Resourceskill";
import {Skill} from "../skill";
import {Resource} from "../../Models/Resource";

@Injectable()
export class SkillService {

    constructor(private http:HttpClient) { }

    getSkillOfResource(resourceId:number){
        return this.http.get<Resourceskill[]>(ApiUri.URI + 'skill/ResourceSkillOrdered?resourceId='+resourceId);

    }

    getAllSkills(){
        return this.http.get<Skill[]>(ApiUri.URI + 'skill/listSkills');
    }

    getResourceSkill(resourceId:number,skillId:number){
        return this.http.get<Skill[]>(ApiUri.URI + 'skill/listSkills');
    }

    getResourcesOfSkill(skillId:number){
        return this.http.get<Resource[]>(ApiUri.URI + 'skill/orderResourcesOfSkill?skillId='+skillId);
    }

    AddSkill(s:Skill){
        const body = {
            nameSkill:s.nameSkill

        };
        console.log('Sending Authorization request ..');
        return this.http.post<Skill>(ApiUri.URI+'skill/addSkill',body);
    }

    DeleteSkill(id:number){
        return this.http.delete<Skill>(ApiUri.URI + 'skill/DeleteSkill?skillId='+id);
    }


    UpdateSkill(skillToUpdate){
        const body ={
            idSkill:skillToUpdate.idSkill,
            nameSkill:skillToUpdate.nameSkill
        };
        return this.http.put<Skill>(ApiUri.URI + 'skill/updateSkill',body);
    }


    AffectSkillToResource(resourceId,skillId){
        return this.http.post<Resourceskill>(ApiUri.URI + 'skill/addSkillResource?skillId='+skillId+'&resourceId='+resourceId,null);
    }

    DeleteSkillResource(resourceId,skillId){
        return this.http.delete<Resourceskill>(ApiUri.URI + 'skill/deleteSkillResource?skillId='+skillId+'&resourceId='+resourceId);
    }

    RateSkill(skillId,resourceId,rate){
        return this.http.put<Resourceskill>(ApiUri.URI + 'skill/RateSkill?resourceId='+resourceId+'&skillId='+skillId+'&rate='+rate,null);
    }
}
