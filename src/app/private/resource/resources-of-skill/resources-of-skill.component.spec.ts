import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesOfSkillComponent } from './resources-of-skill.component';

describe('ResourcesOfSkillComponent', () => {
  let component: ResourcesOfSkillComponent;
  let fixture: ComponentFixture<ResourcesOfSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesOfSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesOfSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
