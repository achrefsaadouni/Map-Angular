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

  categories: Category[] = [];
  ErrorCnx = true;
  FormValidtation: FormGroup;
  AddedCategorie: Category = new Category();
  constructor( private testservice: TestserviceService , private route: Router , private fb: FormBuilder , private ms: ModuleService) {


  }

  AddNewCategory() {

    this.testservice.AddCategory(this.AddedCategorie).subscribe(
      category => this.categories.push(category),
      error => {
        if (error.status === 200) {

        } else {
          this.ErrorCnx = false;
        }
      }
    );
  }


  ngOnInit() {
    this.testservice.getCategories().subscribe(
      data => {
        this.categories = data;

      });

    this.FormValidtation = this.fb.group({
      name: ['', Validators.required]
    });

  }

}
