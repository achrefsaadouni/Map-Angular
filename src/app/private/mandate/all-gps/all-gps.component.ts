import { Component, OnInit } from '@angular/core';
import {Resource} from '../../Models/Resource';
import {MandateService} from '../Services/mandate.service';
import {ShareDataService} from '../Services/share-data.service';
import {Router} from '@angular/router';
import {Mandate} from '../../Models/Mandate';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-all-gps',
  templateUrl: './all-gps.component.html',
  styleUrls: ['./all-gps.component.css']
})
export class AllGpsComponent implements OnInit {
  AllGps: Resource[];
  mot = '';
  p = 1;
  mandate:Mandate;
  constructor(private httpService: MandateService,private share : ShareDataService,private route: Router) {
    if(!this.share.getMandate()){

      this.route.navigate(["auth/allMandate"])
    }
    this.mandate = this.share.getMandate();
  this.httpService.getAllGps().subscribe(
    data => {
  this.AllGps = data;
  });}

  ngOnInit() {
  }

  add(m:Resource){
    Swal({
      title: 'Add This Resource As A Gps',
      text: 'Are you sure ?',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
       this.httpService.addGps(m,this.mandate).subscribe();
        Swal({
          type: 'success',
          title: 'Your Request will  be saved in Just a few Second',
          showConfirmButton: false,
          timer: 7000,
        }).then(() => {

          this.route.navigate(["auth/allMandate"]);
        })  }
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your  Request is safe :)',
          'error'
        )
      }
    })



  }

}
