import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {AllMandateComponent} from './mandate/all-mandate/all-mandate.component';
import {RouteModuleRoutingModule} from '../route-module/route-module-routing.module';
import {MandateService} from './mandate/Services/mandate.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AddAuthenticationHeaderInterceptor} from './shared/add-authentication-header-interceptor';


@NgModule({
  imports: [
    CommonModule,
    RouteModuleRoutingModule,
  ],
  declarations: [LayoutComponent, AllMandateComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AddAuthenticationHeaderInterceptor,
    multi: true
  }, MandateService]
})
export class PrivateModule { }
