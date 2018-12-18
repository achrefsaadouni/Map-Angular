import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {RouteModuleRoutingModule} from '../route-module/route-module-routing.module';
import {MandateService} from './mandate/Services/mandate.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AddAuthenticationHeaderInterceptor} from './shared/add-authentication-header-interceptor';
import {MandateModule} from './mandate/mandate.module';
import { JobrequestComponent } from './jobrequest/jobrequest.component';
import { TestCategoryComponent } from './test-category/test-category.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ModulesComponent } from './modules/modules.component';


@NgModule({
  imports: [
    CommonModule,
    RouteModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MandateModule
  ],
  declarations: [LayoutComponent, JobrequestComponent, TestCategoryComponent, ModulesComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AddAuthenticationHeaderInterceptor,
    multi: true
  }, MandateService]
})
export class PrivateModule { }
