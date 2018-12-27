import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobrequestComponent } from './list-jobrequest.component';

describe('ListJobrequestComponent', () => {
  let component: ListJobrequestComponent;
  let fixture: ComponentFixture<ListJobrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJobrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
