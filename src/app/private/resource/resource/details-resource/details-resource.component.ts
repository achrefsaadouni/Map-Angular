import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Resource} from '../../../Models/Resource';

import {Skill} from '../../../Models/Skill';
import {ResourceService} from '../service/resource.service';
import {SkillService} from '../../../skill/service/skill.service';
import {PushNotificationsService} from '../../service/notification.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-details-resource',
  templateUrl: './details-resource.component.html',
  styleUrls: ['./details-resource.component.css'],
  providers: [ResourceService, SkillService, PushNotificationsService]
})
export class DetailsResourceComponent implements OnInit {
  resourceChoisi: Resource;
  resourceid: number;
  bol: boolean = false;
  moyenne: number;
  resourceCo: Resource = new Resource();
  idResourceCon: number;
  load: boolean = true;
  @ViewChild('content') content: ElementRef;

  constructor(private route: ActivatedRoute,
              private rs: ResourceService,
              private ss: SkillService,
              private router: Router,
              private notifier: PushNotificationsService) {
    if (localStorage.length === 0) {
      this.router.navigate(['login']);
    }
    this.idResourceCon = Number(localStorage.getItem('id'));

    this.route.params.subscribe(params => this.resourceid = params.id);
    console.log('id connectééééééééééééééééééééééééééééééé' + this.resourceid);
    this.rs.moyenneResource(this.resourceid).subscribe(data => console.log('done'));
    this.rs.GetResourceById(this.resourceid).subscribe(data => {
      this.resourceChoisi = data;
      this.load = false;
    });
    this.notifier.requestPermission();


  }

  onDetails(id: number) {
    this.router.navigate(['id', id]);
  }


  showSkills() {
    this.bol = this.bol !== true;
  }

  ngOnInit() {

    this.rs.GetResourceById(this.idResourceCon).subscribe(data => {
      this.resourceCo = data;
      console.log(this.resourceCo.roleT);
    });

  }

  archiver() {
    if (this.resourceCo.roleT === 'Admin') {
      this.rs.ArchiverResource(this.resourceid).subscribe(
        resource => console.log('done'),
        error => {
          if (error.status === 200) {
            setTimeout(() => {
              const data: Array<any> = [];
              data.push({
                'title': 'Approval',
                'alertContent': 'Resource Archived'
              });
              this.notifier.generateNotification(data);

              this.router.navigate(['/auth/resource']);
            }, 2000);
          }
        });
    } else {
      const data: Array<any> = [];
      data.push({
        'title': 'Error',
        'alertContent': 'Access denied'
      });
      this.notifier.generateNotification(data);
    }
  }


  unarchive() {
    if (this.resourceCo.roleT === 'Admin') {
      this.rs.unarchive(this.resourceid).subscribe(
        resource => console.log('done'),
        error => {
          if (error.status === 200) {
            setTimeout(() => {
              const data: Array<any> = [];
              data.push({
                'title': 'Approval',
                'alertContent': 'Resource unarchived'
              });
              this.notifier.generateNotification(data);

              this.router.navigate(['/auth/resource']);
            }, 2000);
          }
        });
    } else {
      const data: Array<any> = [];
      data.push({
        'title': 'Error',
        'alertContent': 'Access denied'
      });
      this.notifier.generateNotification(data);
    }
  }

  downloadPdf() {
    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;

      }
    };
    const content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save('Cv.pdf');

  }

}
