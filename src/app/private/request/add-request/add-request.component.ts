import { Component, OnInit } from '@angular/core';
import {Request} from '../../Models/Request';
import {ListRequestService} from '../service/list-request.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css'],
  providers: [ListRequestService]
})
export class AddRequestComponent implements OnInit {

  newRequest:Request = new Request();
  rP:number;
  eY:number;
  eS:number;
  sD:number;
  dE:number;
  alert:number;
  verif:boolean;
  dateNow:string;
  dateRequestStart:Date;
  dateRequestEnd:Date;
  datePipe:DatePipe= new DatePipe('en-US');



  constructor(private lr: ListRequestService) {

  }

  ngOnInit() {
    this.rP=0;
    this.eY=0;
    this.eS=0;
    this.sD=0;
    this.dE=0;
    this.alert=0;
    this.verif=true;
    this.dateNow= this.datePipe.transform(new Date(), 'yyyy/MM/dd');
    console.log(this.dateNow);

  }


  verifier()
  {
      this.verif=true;
    this.rP=0;
    this.eY=0;
    this.eS=0;
    this.sD=0;
    this.dE=0;
    this.dateRequestStart= new Date(this.newRequest.startDateMondate);
    this.dateRequestEnd= new Date(this.newRequest.endDateMondate);
      if((this.newRequest.requestedProfil === "Developper")||(this.newRequest.requestedProfil === "Designer")||(this.newRequest.requestedProfil === " "))
      {
        this.verif=true;
      }
      else
      {
        this.rP=1;
        this.verif=false;
      }

      if((this.newRequest.experienceYear<0)||(this.newRequest.experienceYear>30)||(this.newRequest.experienceYear===null))
      {
        this.eY=1;
        this.verif=false;
      }

      if((this.newRequest.educationScolarity.length>50)||(this.newRequest.educationScolarity===null))
      {
        this.eS=1;
        this.verif=false;
      }

      if(this.dateRequestStart<new Date())
      {
        this.sD=1;
        this.verif=false;
      }

    if(this.dateRequestEnd<this.dateRequestStart)
    {
      this.dE=1;
      this.verif=false;
    }

  }


  addRequest()
  {
   this.verifier();
   if(this.verif===true)
   {
     this.lr.addRequest(this.newRequest,2).subscribe();
     console.log(this.newRequest);
     console.log(this.newRequest);
     this.alert=1;
   }
   else
   {
     console.log(this.newRequest);
     console.log("rp"+this.rP,
     "ey"+this.eY,
       "es"+this.eS,
       "sd"+this.sD,
       "dE"+this.dE);

     console.log("non");
   }

  }


}
