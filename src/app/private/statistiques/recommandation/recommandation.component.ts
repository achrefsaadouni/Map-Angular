import { Component, OnInit } from '@angular/core';
import {ServicerecService} from "./service/servicerec.service";

@Component({
  selector: 'app-recommandation',
  templateUrl: './recommandation.component.html',
  styleUrls: ['./recommandation.component.css'],
  providers:[ServicerecService]

})
export class RecommandationComponent implements OnInit {
  listUser: Object;

  constructor(public ds:ServicerecService) { }

  ngOnInit() {
    this.ds.StackOverFlow().subscribe(
      data => {
        console.log(data);
        this.listUser=data;
        console.log(this.listUser);

      }
    );
  }

}
