import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceMandateComponent } from './resource-mandate.component';

describe('ResourceMandateComponent', () => {
  let component: ResourceMandateComponent;
  let fixture: ComponentFixture<ResourceMandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceMandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
