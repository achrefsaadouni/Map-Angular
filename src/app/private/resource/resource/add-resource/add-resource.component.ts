import {Component, OnInit} from '@angular/core';
import {Resource} from '../../../Models/Resource';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {ResourceService} from "../service/resource.service";
import {PushNotificationsService} from "../../service/notification.service";




@Component({
    selector: 'app-add-resource',
    templateUrl: './add-resource.component.html',
    styleUrls: ['./add-resource.component.css'],
    providers:[ResourceService ,PushNotificationsService]
})
export class AddResourceComponent implements OnInit {


    ClientForm: FormGroup;
    resourceCo:Resource;
    idResourceCon:number;

    newResource: Resource = new Resource();
    Resources: Resource[];
    selectedFile: File;
    constructor(private rs: ResourceService ,
                private http: HttpClient ,
                private route: Router ,
                private notifier:PushNotificationsService,
                private formBuilder:FormBuilder) {
        if (localStorage.length === 0) {
            this.route.navigate(['login']); }
        this.idResourceCon = Number(localStorage.getItem('id'));

        this.rs.GetAllResourcesNoArchived().subscribe(data=>{this.Resources = data;});
        this.rs.GetResourceById(this.idResourceCon).subscribe(data=>{
            this.resourceCo=data;
            console.log("roooooole "+data.roleT);
        });
    }

    ngOnInit() {
        this.notifier.requestPermission();
        this.ClientForm = this.formBuilder.group({


            firstName:['',Validators.required],
            lastName:['',Validators.required],
            email:['',[Validators.email,Validators.required]],
            login:['',Validators.required],
            password:['',[Validators.required,Validators.minLength(8)]],
            seniority:['',[Validators.required,Validators.minLength(2)]],
            workProfil:['',[Validators.minLength(2),Validators.required]],
            salary:['',[Validators.required,Validators.min(0)]],
            jobType:['',[Validators.required,Validators.minLength(2)]],
            cv:['',Validators.required],
            bussinessSector:['',Validators.required],
            photo:['',Validators.required]






        });
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
                            const data: Array < any >= [];
                            data.push({
                                'title': 'Approval',
                                'alertContent': 'Resource added with success'
                            });
                            this.notifier.generateNotification(data);
                            this.route.navigate(["auth/resource"]);

                        }, 60);
                    }else{
                        if (error.status === 400) {
                            setTimeout(() => {
                                const data: Array < any >= [];
                                data.push({
                                    'title': 'error',
                                    'alertContent': 'not added'
                                });
                                this.notifier.generateNotification(data);

                            }, 60);

                        }
                    }});



    }
}
