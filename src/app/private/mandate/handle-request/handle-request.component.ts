import {Component, OnDestroy, OnInit} from '@angular/core';
import {Suggestion} from '../../Models/Suggestion';
import {MandateService} from '../Services/mandate.service';
import {Subscription} from 'rxjs/Subscription';
import {DragulaService} from 'ng2-dragula';
import {Router} from '@angular/router';
import {ShareDataService} from '../Services/share-data.service';
import Swal from 'sweetalert2'
declare var $:any;
@Component({
  selector: 'app-handle-request',
  templateUrl: './handle-request.component.html',
  styleUrls: ['./handle-request.component.css']
})
export class HandleRequestComponent implements OnInit, OnDestroy {
  s:Suggestion;
  id:number;
  loading = true;
  draggedItem = [];
  x:any;
  content:any;
  test=true;
  subs = new Subscription();
  response:any;
  constructor(private httpService: MandateService, private dragulaService:DragulaService, private route:Router,private share:ShareDataService) {

    if(!share.getData()){
      this.route.navigate(["auth/request"]);
    }
    this.subs.add(dragulaService.dropModel('DRAGULA_FACTS')
      .subscribe(({ el, target, source, sourceModel, targetModel, item }) => {
        if(target.id === 'draggedItems') {
          targetModel.pop();
          if(targetModel.length > 0) {
            sourceModel.push(targetModel[0]);
            targetModel.pop();
            targetModel.push(item);
          } else {
            targetModel.push(item);
          }
        }
        if(targetModel.length === 0 || sourceModel.length === 0)
        {
          this.test = true;
        }
        else
        {
          this.test = false;
        }
      })
    );
  }

  ngOnInit() {
    this.httpService.getSuggession(this.share.getData().id).subscribe(
      data => {
        this.s = data;
        this.loading = false;
      });

  }



  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  redit() {
    this.route.navigate(["auth/request"]);
  }

  confirm() {
    Swal({
      title: 'Add This Resource As A Suggestion',
      text: 'Are you sure ?',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.response= this.httpService.addSuggestion(this.draggedItem[0].id,this.s.request.id).subscribe();
        Swal({
          type: 'success',
          title: 'Your Request will  be saved in Just a few Second',
          showConfirmButton: false,
          timer: 7000,
        }).then(() => {

          this.route.navigate(['auth/request']);
        })  }
       else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your  Request is safe :)',
          'error'
        )
      }
    })

}}
