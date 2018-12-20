import { Component, OnInit } from '@angular/core';
import {ModuleService} from './service/module.service';
import {Modules} from '../Models/Modules';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css'],
  providers: [ModuleService]
})
export class ModulesComponent implements OnInit {
  modules: Modules[] ;
  hiddenForm = true;
  NewModule: Modules = new Modules();
  id: string;
  showForm() {
    this.hiddenForm = !this.hiddenForm;
  }
  constructor( private ms: ModuleService , private route: ActivatedRoute , private router: Router) {
    this.route.params.subscribe(params => {
      this.id = params.id ;
    });
  this.ms.getModulesByCat(this.id).subscribe(
    data => {
      this.modules = data;
    });
  }
  AddModule() {
  this.ms.AddModuleToCat(this.NewModule, this.id).subscribe(
    category => this.modules.push(this.NewModule));

    this.hiddenForm = !this.hiddenForm ;

  }



  ngOnInit() {


  }

}
