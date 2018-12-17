import { Component, OnInit } from '@angular/core';
import {TestserviceService} from './service/testservice.service';
import {Category} from '../Models/Category';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test-category',
  templateUrl: './test-category.component.html',
  styleUrls: ['./test-category.component.css'],
  providers: [TestserviceService]
})
export class TestCategoryComponent implements OnInit {
  categories: Category[];
  ErrorCnx = true;
  FormValidtation: FormGroup;
  AddedCategorie: Category = new Category();
  constructor( private testservice: TestserviceService , private route: Router , private fb: FormBuilder) {
    this.testservice.getCategories().subscribe(
      data => {
        this.categories = data;
      });


  }

  AddNewCategory( ) {
    this.testservice.AddCategory(this.AddedCategorie).subscribe(
      category => this.categories.push(this.AddedCategorie),
      error => {
        if (error.status === 200) {
          this.route.navigate(['auth/category']);
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
