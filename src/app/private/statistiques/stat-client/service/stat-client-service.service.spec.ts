import { TestBed, inject } from '@angular/core/testing';

import { StatClientServiceService } from './stat-client-service.service';

describe('StatClientServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatClientServiceService]
    });
  });

  it('should be created', inject([StatClientServiceService], (service: StatClientServiceService) => {
    expect(service).toBeTruthy();
  }));
});
