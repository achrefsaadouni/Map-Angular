import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TestserviceService} from './service/testservice.service';
import {Category} from '../Models/Category';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModuleService} from '../modules/service/module.service';

@Component({
  selector: 'app-test-category',
  templateUrl: './test-category.component.html',
  styleUrls: ['./test-category.component.css'],
  providers: [TestserviceService, ModuleService]
})
export class TestCategoryComponent implements OnInit {

  categories: Category[];
  ErrorCnx = true;
  FormValidtation: FormGroup;
  AddedCategorie: Category = new Category();
  constructor( private testservice: TestserviceService , private route: Router , private fb: FormBuilder , private ms: ModuleService) {
    this.testservice.getCategories().subscribe(
      data => {
        this.categories = data;
      });


  }

  AddNewCategory() {

    this.testservice.AddCategory(this.AddedCategorie).subscribe(
      category => this.categories.push(this.AddedCategorie),
      error => {
        if (error.status === 200) {
          setTimeout(() => {
            this.route.navigate([this.route.url]);
          }, 2000);
        } else {
          this.ErrorCnx = false;
        }
      }
    );
  }


  ngOnInit() {
    this.FormValidtation = this.fb.group({
      name: ['', Validators.required]
    });

  }

}
