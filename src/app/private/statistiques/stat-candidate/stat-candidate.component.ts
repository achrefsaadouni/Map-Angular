import { Component, OnInit } from '@angular/core';
import {StatCandidateServiceService} from "./service/stat-candidate-service.service";
import { Chart } from 'chart.js';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import * as rasterizeHTML from 'rasterizehtml';

@Component({
  selector: 'app-stat-candidate',
  templateUrl: './stat-candidate.component.html',
  styleUrls: ['./stat-candidate.component.css'],
  providers: [StatCandidateServiceService]
})
export class StatCandidateComponent implements OnInit {
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
  constructor(public ds:StatCandidateServiceService) { }

  ngOnInit() {
    this.ds.CountCadidateResultByTypeTest().subscribe(
      data => {
        console.log(data);
        this.chart2 = new Chart('canvas1',{
          type: 'bar',
          data: {
            labels:[data[0][2],data[1][2]],
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
    this.ds.CandidateRankedByNbJobRequest().subscribe(
      data1 => {
        console.log(data1);
        this.list1= data1.map(function (e) {

          return e[0];
        });
        this.list2= data1.map(function (e) {

          return e[1];
        });
        this.chart4 = new Chart('canvas3',{
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
            title: { display: true, text: 'Candidate Ranked By Job Request' },
            legend: { position: 'none' },
            scales: {
              xAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: true, labelString: 'Candidate Name' } }],
              yAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: true, labelString: 'Nb Job Request' },
                ticks: { stepSize: 10, beginAtZero: true } }]
            },
          }
        });

      });


    this.ds.CountNbCandidateByState().subscribe(
      data => {
        console.log(data);
        this.listUser= data.map(function (e) {

          return e[0];
        });
        this.listUser1= data.map(function (e) {

          return e[1];
        });
        this.chart3 = new Chart('canvas2',{
          type: 'pie',
          data: {
            labels:this.listUser1,
            datasets: [
              {
                label: "",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                borderColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                borderWidth: 1,
                data: this.listUser
              }
            ]
          },

          options: {
            responsive: true,
            title: { display: true, text: 'Nb Candidate By Status' },
            legend: { position: 'none' },
          }
        });
      });
    this.ds.SkillsRecommended().subscribe(
      data => {
        console.log(data);
        this.list3= data.map(function (e) {

          return e[0];
        });
        this.list4= data.map(function (e) {

          return e[1];
        });
        this.chart5 = new Chart('canvas4',{
          type: 'pie',
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
            title: { display: true, text: 'Skills Recommended' },
            legend: { position: 'none' },
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
