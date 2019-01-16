import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatRhComponent } from './stat-rh.component';

describe('StatRhComponent', () => {
  let component: StatRhComponent;
  let fixture: ComponentFixture<StatRhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatRhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
