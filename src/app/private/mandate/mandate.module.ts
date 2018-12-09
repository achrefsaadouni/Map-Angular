import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMandateComponent } from './all-mandate/all-mandate.component';
import { AllRequestComponent } from './all-request/all-request.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AllMandateComponent, AllRequestComponent],


})
export class MandateModule { }
