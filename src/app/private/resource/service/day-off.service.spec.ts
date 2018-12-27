import { TestBed, inject } from '@angular/core/testing';

import { DayOffService } from './day-off.service';

describe('DayOffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DayOffService]
    });
  });

  it('should be created', inject([DayOffService], (service: DayOffService) => {
    expect(service).toBeTruthy();
  }));
});
