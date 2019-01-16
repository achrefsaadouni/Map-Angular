import {Resourceskill} from './Resourceskill';
import {Project} from "./Project";
import {DayOff} from "./DayOff";

export class Resource {
    id: number;
    seniority: string;
    workProfil: string;
    salary: number;
    picture: string;
    moyenneSkill: number;
    login:string;
    password: string;
    nombreAlerte: number;
    nombreConge: number;
    jobType: string;
    cv: string;
    businessSector: string;
    availability: string;
    firstName: string;
    lastName: string;
    email: string;
    archived: number;
    resourceSkills: Resourceskill[];
    projet:Project;
    DayOffs:DayOff[];
    roleT:string;
    firstVisit:number;
}
