import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCandidateComponent } from './stat-candidate.component';

describe('StatCandidateComponent', () => {
  let component: StatCandidateComponent;
  let fixture: ComponentFixture<StatCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
