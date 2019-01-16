import { TestBed, inject } from '@angular/core/testing';

import { StatCandidateServiceService } from './stat-candidate-service.service';

describe('StatCandidateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatCandidateServiceService]
    });
  });

  it('should be created', inject([StatCandidateServiceService], (service: StatCandidateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
