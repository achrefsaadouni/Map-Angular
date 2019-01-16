import {AfterViewInit, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import {StatRhServiceService} from "./service/stat-rh-service.service";
@Component({
  selector: 'app-stat-rh',
  templateUrl: './stat-rh.component.html',
  styleUrls: ['./stat-rh.component.css'],
  providers: [StatRhServiceService]

})
export class StatRhComponent implements OnInit{
  chart2 = [];
  chart3 = [];
  chart4 = [];
  listUser: Object;
  listUser1: Object;
  chart5 = [];
  list1: Object;
  list2: Object;
  list3: Object;
  list4: Object;
  constructor(public ds:StatRhServiceService) { }
ngOnInit(){
    this.ds.CountNbRhByAvailability().subscribe(
  data1 => {
    console.log(data1);
    this.list1= data1.map(function (e) {

      return e[0];
    });
    this.list2= data1.map(function (e) {

      return e[1];
    });
    this.chart4 = new Chart('canvas3',{
      type: 'pie',
      data: {
        labels:this.list2,
        datasets: [
          {
            label: "",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            borderColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            borderWidth: 1,
            data: this.list1
          }
        ]
      },

      options: {
        responsive: true,
        title: { display: true, text: 'Nb Rh By Availability' },
        legend: { position: 'none' },
      }
    });

  });


  this.ds.RhRankedBySalary().subscribe(
    data => {
      console.log(data);
      this.listUser= data.map(function (e) {

        return e[0];
      });
      this.listUser1= data.map(function (e) {

        return e[1];
      });
      this.chart3 = new Chart('canvas2',{
        type: 'bar',
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
          title: { display: true, text: 'Rh Ranked By Salary' },
          legend: { position: 'none' },
          scales: {
            xAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: true, labelString: 'Rh Name ' } }],
            yAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: true, labelString: ' Salary (Dt)' }, ticks: { stepSize: 800, beginAtZero: true } }]
          },
        }
      });
    });
  this.ds.RhAvailableRankedByNote().subscribe(
    data => {
      console.log(data);
      this.list3= data.map(function (e) {

        return e[0];
      });
      this.list4= data.map(function (e) {

        return e[1];
      });
      this.chart5 = new Chart('canvas4',{
        type: 'bar',
        data: {
          labels:this.list3,
          datasets: [
            {
              label: "",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              borderColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              borderWidth: 1,
              data: this.list4
            }
          ]
        },

        options: {
          responsive: true,
          title: { display: true, text: 'Rh Available Ranked By Note' },
          legend: { position: 'none' },
          scales: {
            xAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: true, labelString: 'Rh Name ' } }],
            yAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: true, labelString: ' Note' }, ticks: { stepSize: 2, beginAtZero: true } }]
          },
        }
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
