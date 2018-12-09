import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  name: string;
  constructor( private router: Router) {if (localStorage.length === 0) {
      this.router.navigate(['login']); }
    this.name = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
  }

  ngOnInit() {
  }
  logout() {
    localStorage.clear();
  }

}
