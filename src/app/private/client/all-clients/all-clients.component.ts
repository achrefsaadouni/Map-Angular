import { Component, OnInit } from '@angular/core';
import {ClientService} from '../service/client.service';
import {MClient} from '../../Models/MClient';
import {NgOrganizationChartHelper} from '../../ng-organization-chart/ng-organization-chart-helper';
import {ProjectR} from '../../Models/ProjectR';

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.css'],
  providers: [ClientService]
})
export class AllClientsComponent implements OnInit {
 clients: MClient [] = [] ;
  data = [];
  role: string = localStorage.getItem('role');
  client: MClient ;
  listProject: ProjectR[] = [];
  projectsOrg = [] ;
  idClient;
  constructor(private httpService: ClientService) {

  }

  clickNode(node) {

    alert('Node \'' + node.id + '\' was clicked!');
  }

  dragNode(transfer) {
    const helper = new NgOrganizationChartHelper(this.data);
    helper.moveNode(transfer.node.id, transfer.destination.id);
    const data = helper.getData();
    this.data = data;
  }

  getIdClient(id) {
    this.idClient = id ;
    return this.idClient ;
  }


  getProjects(id) {
    // this.httpService.getClientById(this.idClient).subscribe(client => {
    //   this.client = client ;
    // });

    this.httpService.getProjectsOfClient(id).subscribe(value => {
      this.listProject = value ;
    });
    // this.projectsOrg = this.listProject.map(o => {
    //   return {id: o.projectName, children: []}
    // });
    // this.data = [
    //   {
    //     id: this.client.nameSociety,
    //     children: this.projectsOrg
    //   }
    // ];
    return this.listProject ;
   }
   getOrgProjects(){
     this.projectsOrg = this.listProject.map(o => {
       return {id: o.projectName, children: []}
     });
     this.data = [
       {
         id: 'client1',
         children: this.projectsOrg
       }
     ];
     return this.data ;
   }


  ngOnInit() {
    this.httpService.getAllClient().subscribe(value => {
        this.clients = value ;
      }
    );
    console.log('list client : ' +this.clients)  ;
  }

}
