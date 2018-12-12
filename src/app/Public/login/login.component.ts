import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../shared/authenticate.service';
import {Router} from '@angular/router';

import '../../../assets/js/TweenLite.min.js';
import '../../../assets/vendors/iCheck/js/icheck.js';
import '../../../assets/js/pages/login2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  Error: boolean;
  constructor(private service: AuthenticateService, private route: Router) { this.Error = true; }

  ngOnInit() {
  }
  loginIn() {
   this.service.authenticateMe(this.login, this.password).subscribe(data => {
    localStorage.setItem('token', data.token);
     localStorage.setItem('firstName', data.firstName);     localStorage.setItem('id', data.id.toString());

       localStorage.setItem('lastName', data.lastName);
     localStorage.setItem('role', data.roleT);
       window.location.replace('/auth/jobrequest');
    }, err => {
      if (err.status === 200) {
          this.route.navigate(['auth/jobrequest']);
      } else {
          this.Error = false;
      }
     }

    );
  }

}
