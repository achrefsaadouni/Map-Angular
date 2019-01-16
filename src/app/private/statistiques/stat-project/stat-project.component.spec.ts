import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatProjectComponent } from './stat-project.component';

describe('StatProjectComponent', () => {
  let component: StatProjectComponent;
  let fixture: ComponentFixture<StatProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
