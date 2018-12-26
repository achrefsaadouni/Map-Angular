import {Component, OnInit} from '@angular/core';
import {NgOrganizationChartHelper} from '../../ng-organization-chart/ng-organization-chart-helper';

@Component({
  selector: 'app-advanced-profil',
  templateUrl: './advanced-profil.component.html',
  styleUrls: ['./advanced-profil.component.css']
})
export class AdvancedProfilComponent implements OnInit {
  data = [
    {
      id: 'Ariana',
      children: [
        {id: 'Project#1', children: [{id: 'Person#1' , children: []}] },
        {id: 'Project#2', children: [{id: 'Person#2' , children: []}] },
        {id: 'Project#3', children: [{id: 'Person#3' , children: []}] },
      ]
    }
  ];

  clickNode(node) {
    alert('Node \'' + node.id + '\' was clicked!') ;
  }

  dragNode(transfer) {
    const helper = new NgOrganizationChartHelper(this.data);
    helper.moveNode(transfer.node.id, transfer.destination.id);
    const data = helper.getData();
    this.data = data;
  }
  constructor() {
  }

  ngOnInit() {
  }

}
