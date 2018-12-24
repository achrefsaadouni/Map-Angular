import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsByResourceComponent } from './skills-by-resource.component';

describe('SkillsByResourceComponent', () => {
  let component: SkillsByResourceComponent;
  let fixture: ComponentFixture<SkillsByResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsByResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsByResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
