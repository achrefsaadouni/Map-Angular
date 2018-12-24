import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Resource} from "../../../Models/Resource";
import {ApiUri} from "../../../shared/api-uri";


@Injectable()
export class ResourceService {


    constructor(private http:HttpClient) { }




    GetAllResourcesNoArchived() {
        return this.http.get<Resource[]>(ApiUri.URI + 'Resources/listeResourceNoArchivedParMoyenne');
    }

    GetResourceById(id:number){
        return this.http.get<Resource>(ApiUri.URI + 'Resources/resourceById?resourceId='+id);
    }

    AddResource(r: Resource) {
        const body = {
            firstName: r.firstName,
            lastName: r.lastName,
            email: r.email,
            password: r.password,
            seniority: r.seniority,
            workProfil: r.workProfil,
            salary: r.salary,
            jobType: r.jobType,
            businessSector: r.businessSector,
            cv: r.cv,
            picture: r.picture

        };
        console.log('Sending Authorization request ..');
        return this.http.post<Resource>(ApiUri.URI+'Resources/add',body);
    }


    ArchiverResource(resourceid:number){
        return this.http.put<Resource>(ApiUri.URI+'Resources/archive?resourceId='+resourceid,null);


    }

}
