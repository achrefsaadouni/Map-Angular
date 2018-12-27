import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedProfilComponent } from './advanced-profil.component';

describe('AdvancedProfilComponent', () => {
  let component: AdvancedProfilComponent;
  let fixture: ComponentFixture<AdvancedProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
