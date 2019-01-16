import { Component, OnInit } from '@angular/core';
import {RequestA} from '../../Models/RequestA';
import {ShareDataService} from '../Services/share-data.service';
import Swal from 'sweetalert2'
import {MandateService} from '../Services/mandate.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-validate-request',
  templateUrl: './validate-request.component.html',
  styleUrls: ['./validate-request.component.css']
})
export class ValidateRequestComponent implements OnInit {
  s: RequestA;
  d:Date;
  date:string;
  date1:string;
  date2:string;
  date3:string;
  date4:string;
  date5:string;


  constructor(private share:ShareDataService , private mandateService: MandateService, private route: Router,private datePipe: DatePipe)
  {
    this.s = share.getData();
    if(!this.s){
      this.route.navigate(["auth/myRequest"]);
    }

  }

  ngOnInit() {

  }
  cancel(s: RequestA) {
    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.mandateService.cancelRequest(s.id).subscribe(
          (response: any) => {
            console.log(response)
          },
          (error: any) => {
            console.log(error)
          });

      Swal(
          'Deleted!',
          'The Suggestion has  been deleted.',
          'success'
        ).then(() => {
            this.route.navigate(['auth/myRequest']);
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your  Request is safe :)',
          'error'
        )
      }
    })
  }

  accept(s: RequestA) {
    Swal({
      title: 'Add This Request to Your Mandate',
      text: 'Are you sure ?',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.mandateService.acceptRequest(s).subscribe(
          (response: any) => {
            console.log(response)
          },
          (error: any) => {
            console.log(error)
          });

        Swal({
          type: 'success',
          title: 'Your Mandate will  be saved in Just a few Second',
          showConfirmButton: false,
          timer: 7000,
        }).then(() => {

          this.route.navigate(['auth/myRequest']);
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your  Request is safe :)',
          'error'
        )
      }
    })
  }

  summon(s: RequestA) {
    this.d = new Date();
    this.d.setDate(this.d.getDate()+1)
    this.date1 = new Date(this.d).toDateString();
    this.d.setDate(this.d.getDate()+1)
    this.date2 = new Date(this.d).toDateString();
    this.d.setDate(this.d.getDate()+1)
    this.date3 = new Date(this.d).toDateString();
    this.d.setDate(this.d.getDate()+1)
    this.date4 = new Date(this.d).toDateString();
    this.d.setDate(this.d.getDate()+1)
    this.date5 = new Date(this.d).toDateString();
    Swal({
      title: 'Select field validation',
      input: 'select',
      inputOptions: {
        date1 : this.date1,
        date2 : this.date2,
        date3 : this.date3,
        date4 : this.date4,
        date5 : this.date5,
      },
      inputPlaceholder: 'Select a Date',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value !== '') {
            this.summ(value);
            this.resolve()
          } else {
            resolve('You need to select a date :)')
          }
        })
      }
    })
  }
  resolve()
  {
    Swal({
      type: 'success',
      showConfirmButton: false,
      title: 'Your Request will be Traited in Just a few Second',
      timer: 7000,
    }).then(() => {
      this.route.navigate(['auth/myRequest']);
    })
  }


   summ(value: string) {
     this.d = new Date();
    if(value==='date1') {
      this.mandateService.summon(this.s,this.datePipe.transform(new Date(this.d.setDate(this.d.getDate()+1)), 'yyyy-MM-dd')).subscribe(
        (response: any) => {
          console.log(response)
        },
        (error: any) => {
          console.log(error)
        });
    }
     else if(value==='date2') {
      this.mandateService.summon(this.s,this.datePipe.transform(new Date(this.d.setDate(this.d.getDate()+2)), 'yyyy-MM-dd')).subscribe(
        (response: any) => {
          console.log(response)
        },
        (error: any) => {
          console.log(error)
        });;
          }
    else if(value==='date3') {
      this.mandateService.summon(this.s,this.datePipe.transform(new Date(this.d.setDate(this.d.getDate()+3)), 'yyyy-MM-dd')).subscribe(
        (response: any) => {
          console.log(response)
        },
        (error: any) => {
          console.log(error)
        });;
         }
     else if(value==='date4') {
      this.mandateService.summon(this.s,this.datePipe.transform(new Date(this.d.setDate(this.d.getDate()+4)), 'yyyy-MM-dd')).subscribe(
        (response: any) => {
          console.log(response)
        },
        (error: any) => {
          console.log(error)
        });;
          }
     else if(value==='date5') {
      this.mandateService.summon(this.s,this.datePipe.transform(new Date(this.d.setDate(this.d.getDate()+5)), 'yyyy-MM-dd')).subscribe(
        (response: any) => {
          console.log(response)
        },
        (error: any) => {
          console.log(error)
        });;
          }
  }
}
