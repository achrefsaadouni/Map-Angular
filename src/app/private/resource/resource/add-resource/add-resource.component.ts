import {Component, OnInit} from '@angular/core';
import {Resource} from '../../../Models/Resource';

import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {ResourceService} from "../service/resource.service";
import {AlertService} from "../../../alert/alert.service";


@Component({
    selector: 'app-add-resource',
    templateUrl: './add-resource.component.html',
    styleUrls: ['./add-resource.component.css'],
    providers:[ResourceService]
})
export class AddResourceComponent implements OnInit {

    newResource: Resource = new Resource();
    Resources: Resource[];
    selectedFile: File;
    constructor(private rs: ResourceService ,
                private http: HttpClient ,
                private route: Router ,
                private alertService: AlertService) {
        this.rs.GetAllResourcesNoArchived().subscribe(data=>{this.Resources = data;});
    }

    ngOnInit() {
    }
    onFileChanged(event){
        this.selectedFile = event.target.files[0]

    }

    addResource() {
        this.http.post('assets/imagesResources',this.selectedFile).subscribe(res=>console.log(res));
        this.newResource.picture = this.selectedFile.name.substr(0,this.selectedFile.name.length -4);
        this.rs.AddResource(this.newResource).subscribe(
            resource => this.Resources.push(this.newResource),
            error => {
                if (error.status === 200) {
                    setTimeout(() => {
                        this.alertService.success("added with success");
                        this.route.navigate(['/auth/resource']);
                    }, 60);
                }else{
                    if (error.status != 200) {
                        setTimeout(() => {
                            this.alertService.error("can't be added");

                        }, 60);

                }
            }});


    }

}
