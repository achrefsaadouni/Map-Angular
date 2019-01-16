import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDayOffComponent } from './add-day-off.component';

describe('AddDayOffComponent', () => {
  let component: AddDayOffComponent;
  let fixture: ComponentFixture<AddDayOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDayOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDayOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
