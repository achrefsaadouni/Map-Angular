import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  name: string;
  role:string;
  id: number;
  constructor( private router: Router) {if (localStorage.length === 0) {
       this.router.navigate(['login']); }
     this.name = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
  this.role = localStorage.getItem('role');
  this.id = Number(localStorage.getItem('id'));
   }

  ngOnInit() {
  }
  logout() {
    localStorage.clear();
  }

}
