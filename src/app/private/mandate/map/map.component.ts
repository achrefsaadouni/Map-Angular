import { Component, OnInit } from '@angular/core';
import {Project} from '../../Models/Project';
import {MandateService} from '../Services/mandate.service';
import {MapContent} from '../../Models/MapContent';
declare var $:any;
declare var L:any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  loading = true;
  mapContent: MapContent[];
  projects: Project[];
  mymap:any;
  a:any;
  b:any;
  i:any;
  markers = [];
  test=false;
  k:any;
  popup:any;
  marker:any;
  constructor(private httpService: MandateService) {

    this.httpService.getAllProjects().subscribe(
      data => {
        this.projects = data;
      });
  }

  ngOnInit() {

    this.mymap = L.map('mapid').setView([46.7685297, -71.2958736], 4);
    // @ts-ignore
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoic2FhZG91bmkiLCJhIjoiY2pvdm16ZXNlMWpuaTNwbGh2bHprZ21sYiJ9.rme0-S2pb8oQwK9vmRV_kQ'}).addTo(this.mymap);
    this.httpService.getMapContent().subscribe(
      data => {
        this.mapContent = data;
        for (const value of this.mapContent)
        {

          this.k = `<img src ="` + value.projet.Client.logo + `" width="70px" height="40px" /><span style = "color : red">` + value.projet.projectName + `</span><br><br>`;
          for (const val of value.resources)
          {

            this.k = this.k + `<button style="border:0px; background-color: white"   class="chip pmodel" onClick ="map('` + val.firstName + `','` + val.lastName + `','` + val.workProfil + `','` + val.picture + `','` + val.seniority + `','` + val.jobType + `','` + val.email + `')"><img src="` + val.picture + `" alt="Person" width="30" height="30">` + val.firstName + `</button><br/><br/>`;
          }
          this.popup = L.popup({
            maxWidth : 400
          }).setContent(this.k).setLatLng([value.projet.Client.longitude, value.projet.Client.latitude]).openOn(this.mymap);
          this.marker = L.marker([value.projet.Client.longitude,value.projet.Client.latitude]).addTo(this.mymap).bindPopup(this.popup, { autoClose: false }).openPopup();
          this.markers.push(value.projet.idProject);this.markers.push(this.marker);
        }
        this.loading = false;
      });
  }

  redirect(e) {
      this.mymap.closePopup();
      console.log('clicked');
      this.a = e.currentTarget.parentElement.parentElement.children['0'].innerHTML;
      this.a = this.a.replace(",", ".");
      this.b = e.currentTarget.parentElement.parentElement.children['1'].innerHTML;
      this.b = this.b.replace(",", ".");
      this.mymap.flyTo([parseFloat(this.a), parseFloat(this.b)], 13);

      this.i = Number(e.currentTarget.parentElement.parentElement.children['2'].innerHTML);
      console.log(this.markers);
    for ( let _i = 0; _i < this.markers.length; _i++) {
      {
        if(this.markers[_i] === this.i)
        {
          this.markers[_i+1].openPopup();
        }
        
      }

  }}




}
