import { TestBed, inject } from '@angular/core/testing';

import { StatProjectServiceService } from './stat-project-service.service';

describe('StatProjectServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatProjectServiceService]
    });
  });

  it('should be created', inject([StatProjectServiceService], (service: StatProjectServiceService) => {
    expect(service).toBeTruthy();
  }));
});
