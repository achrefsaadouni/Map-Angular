import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMandateComponent } from './all-mandate/all-mandate.component';
import {MandateService} from './Services/mandate.service';
import {PrivateModule} from '../private.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AddAuthenticationHeaderInterceptor} from '../shared/add-authentication-header-interceptor';

@NgModule({
  imports: [
    CommonModule,
    PrivateModule
  ],
  declarations: [AllMandateComponent],


})
export class MandateModule { }
