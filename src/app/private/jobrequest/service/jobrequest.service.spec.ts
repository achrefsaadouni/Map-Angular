import { TestBed, inject } from '@angular/core/testing';

import { JobrequestService } from './jobrequest.service';

describe('JobrequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobrequestService]
    });
  });

  it('should be created', inject([JobrequestService], (service: JobrequestService) => {
    expect(service).toBeTruthy();
  }));
});
