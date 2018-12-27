import {Resource} from "./Resource";

export class DayOff {
    id:number;
    endDate:string;
    startDate:string;
    reason:string;
    stateType:string;
    typeDayOff:string;
    Resources:Resource[];

}