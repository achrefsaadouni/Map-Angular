import { Component, OnInit } from '@angular/core';
import {StatProjectServiceService} from "./service/stat-project-service.service";
import { Chart } from 'chart.js';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import * as rasterizeHTML from 'rasterizehtml';
@Component({
  selector: 'app-stat-project',
  templateUrl: './stat-project.component.html',
  styleUrls: ['./stat-project.component.css'],
  providers: [StatProjectServiceService]

})
export class StatProjectComponent implements OnInit {
  chart5 = [];
  list1: Object;
  list2: Object;
  constructor(public sp:StatProjectServiceService) { }

  ngOnInit() {

    this.sp.BeneficeByProject().subscribe(
      data => {
        console.log(data);
        this.list1= data.map(function (e) {

          return e[0];
        });
        this.list2= data.map(function (e) {

          return e[1];
        });
        this.chart5 = new Chart('canvas4',{
          type: 'bar',
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
            title: { display: true, text: 'Benefice By Project' },
            legend: { position: 'none' },
            scales: {
              xAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: true, labelString: 'Project Name ' } }],
              yAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: true, labelString: ' Benefice (Dt)' },
                ticks: { stepSize: 400, beginAtZero: true } }]
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
