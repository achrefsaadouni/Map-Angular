import {Component, OnInit} from '@angular/core';
import {Mandate} from '../../Models/Mandate';
import {MandateService} from '../Services/mandate.service';
import {ShareDataService} from '../Services/share-data.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-all-mandate',
  templateUrl: './all-mandate.component.html',
  styleUrls: ['./all-mandate.component.css']
})
export class AllMandateComponent implements  OnInit {
mandates: Mandate[];
mot = '';
p = 1;

  constructor(private httpService: MandateService,private share: ShareDataService,private route: Router) {
    this.mot='';
    this.httpService.getAllMandates().subscribe(
      data => {
        this.mandates = data;
      });
  }
  ngOnInit() {

  }
  add(m){
    this.share.setMandate(m);
    this.route.navigate(["auth/gps"]);
  }
  remove(m:Mandate){
    Swal({
      title: 'Add This Resource As A Gps',
      text: 'Are you sure ?',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.httpService.restore(m).subscribe();

        Swal({
          type: 'success',
          title: 'Your Request will  be saved in Just a few Second',
          showConfirmButton: false,
          timer: 4000,
        }).then(() => {
          m.gps =null;
          this.mandates[this.mandates.indexOf(m)]=m;
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
