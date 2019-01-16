import { TestBed, inject } from '@angular/core/testing';

import { StatRhServiceService } from './stat-rh-service.service';

describe('StatRhServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatRhServiceService]
    });
  });

  it('should be created', inject([StatRhServiceService], (service: StatRhServiceService) => {
    expect(service).toBeTruthy();
  }));
});
