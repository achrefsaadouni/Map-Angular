import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPercentageSkillsComponent } from './add-percentage-skills.component';

describe('AddPercentageSkillsComponent', () => {
  let component: AddPercentageSkillsComponent;
  let fixture: ComponentFixture<AddPercentageSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPercentageSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPercentageSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
