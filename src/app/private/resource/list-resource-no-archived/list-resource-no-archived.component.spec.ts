import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResourceNoArchivedComponent } from './list-resource-no-archived.component';

describe('ListResourceNoArchivedComponent', () => {
  let component: ListResourceNoArchivedComponent;
  let fixture: ComponentFixture<ListResourceNoArchivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResourceNoArchivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResourceNoArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
