import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthenticateService} from './shared/authenticate.service';
import {FormsModule} from '@angular/forms';
import {RouteModuleRoutingModule} from '../route-module/route-module-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouteModuleRoutingModule,
  ],
  declarations: [LoginComponent],
  providers: [AuthenticateService]
})
export class PublicModule { }
