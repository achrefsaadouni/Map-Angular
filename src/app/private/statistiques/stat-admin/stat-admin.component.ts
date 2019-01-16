import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StatAdminServiceService} from "./service/stat-admin-service.service";
import { Chart } from 'chart.js';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import * as rasterizeHTML from 'rasterizehtml';
@Component({
  selector: 'app-stat-admin',
  templateUrl: './stat-admin.component.html',
  styleUrls: ['./stat-admin.component.css'],
  providers: [StatAdminServiceService]

})
export class StatAdminComponent implements OnInit {
  chart2 = [];
  chart3 = [];
  chart4 = [];
  listUser: Object;
  listUser1: Object;
  chart5 = [];
  list1: Object;
  list2: Object;
  constructor(public ds:StatAdminServiceService) { }
  ngOnInit() {
    this.ds.CountCadidateResultByTypeTest().subscribe(
      data => {
        console.log(data);
        this.chart2 = new Chart('canvas1',{
          type: 'bar',
          data: {
            labels:[data[1][2],data[1][2]],
            datasets: [
              {
                label: "accpeted",
                backgroundColor: ["rgba(54, 162, 235, 0.2)","rgba(54, 162, 235, 0.2)"],
                borderColor: ["rgba(54, 162, 235)","rgba(54, 162, 235)"],
                borderWidth: 1,
                data: [data[0][0],data[0][1]]
              },{
                label: "refused",
                backgroundColor: [ "rgba(255, 99, 132, 0.2)","rgba(255, 99, 132, 0.2)"],
                borderColor: ["rgba(255, 99, 132)","rgba(255, 99, 132)"],
                borderWidth: 1,
                data: [data[1][0],data[1][1]]
              }
            ]
          },

          options: {
            responsive: true,
            title: { display: true, text: 'Candidate Results By Test' },
            legend: { position: 'bottom' },
            scales: {
              xAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: true, labelString: 'Test ' } }],
              yAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: true, labelString: ' Nb Candidate' },
                ticks: { stepSize: 10, beginAtZero: true } }]
            },
          }
        });
      });

    this.ds.CountClientByCategory().subscribe(
      data => {
        console.log(data);
        this.chart3 = new Chart('canvas2',{
          type: 'bar',
          data: {
            labels:[data[0][0],data[1][0]],
            datasets: [
              {
                label: "",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                borderColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                borderWidth: 1,
                data: [data[0][1],data[1][1]]
              }
            ]
          },

          options: {
            responsive: true,
            title: { display: true, text: 'Nb Client By Category' },
            legend: { position: 'none' },
            scales: {
              xAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: true, labelString: 'Category ' } }],
              yAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: true, labelString: ' Nb Client' },
                ticks: { stepSize: 10, beginAtZero: true } }]
            },
          }
        });
      });

    this.ds.CountPersonByRegion().subscribe(

      data => {
        console.log(data);
        this.listUser= data.map(function (e) {

          return e[1];
        });
        this.listUser1= data.map(function (e) {

          return e[0];
        });
        console.log(this.listUser);

        this.chart4 = new Chart('canvas3',{
          type: 'horizontalBar',
          data: {
            labels:this.listUser,
            datasets: [
              {
                label: "",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                borderColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                borderWidth: 1,
                data: this.listUser1
              }
            ]
          },

          options: {
            responsive: true,
            title: { display: true, text: 'Count Client By Region' },
            legend: { position: 'none' },
            scales: {
              xAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: true, labelString: '' } }],
              yAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: true, labelString: '' },
                ticks: { stepSize: 10, beginAtZero: true } }]
            },
          }
        });

      });

    this.ds.NbProjectNotEnded().subscribe(

      data => {
        console.log(data);
        this.list2= data.map(function (e) {

          return e[0];
        });
        this.ds.NbProjectEnded().subscribe(

          data1 => {
            console.log(data1);
            this.list1= data1.map(function (e) {

              return e[0];
            });
            this.chart5 = new Chart('canvas4',{
              type: 'doughnut',
              data: {
                labels:['Expired','NotExpired'],
                datasets: [
                  {
                    label: "",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                    borderColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                    borderWidth: 1,
                    data: [this.list1,this.list2]
                  }
                ]
              },

              options: {
                responsive: true,
                title: { display: true, text: 'Nb Project By Validity' },
                legend: { position: 'none' },

              }
            });
          });

      });






  }

  download() {
    html2canvas(document.querySelector("#content")).then(canvas => {

      const pdf = new jsPDF('p', 'pt', [canvas.width+450, canvas.height+450]);

      const imgData  = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData,0,0,canvas.width, canvas.height);
      pdf.save('converteddoc.pdf');

    });

  }

}
