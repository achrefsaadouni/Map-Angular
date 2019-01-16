import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMandateComponent } from './my-mandate.component';

describe('MyMandateComponent', () => {
  let component: MyMandateComponent;
  let fixture: ComponentFixture<MyMandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
