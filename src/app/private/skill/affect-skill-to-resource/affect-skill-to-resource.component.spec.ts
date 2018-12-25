import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectSkillToResourceComponent } from './affect-skill-to-resource.component';

describe('AffectSkillToResourceComponent', () => {
  let component: AffectSkillToResourceComponent;
  let fixture: ComponentFixture<AffectSkillToResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectSkillToResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectSkillToResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
