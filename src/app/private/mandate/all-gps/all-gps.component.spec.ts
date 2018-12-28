import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGpsComponent } from './all-gps.component';

describe('AllGpsComponent', () => {
  let component: AllGpsComponent;
  let fixture: ComponentFixture<AllGpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
