import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouteModuleRoutingModule} from './route-module/route-module-routing.module';
import {PublicModule} from './Public/public.module';
import {PrivateModule} from './private/private.module';
import {HttpModule} from '@angular/http';
import { AllGpsComponent } from './private/mandate/all-gps/all-gps.component';



@NgModule({
  declarations: [
    AppComponent,
    AllGpsComponent
  ],
  imports: [
    BrowserModule,
    PrivateModule,
    PublicModule,
    RouteModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
