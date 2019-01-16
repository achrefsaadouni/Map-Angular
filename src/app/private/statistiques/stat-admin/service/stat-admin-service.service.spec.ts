import { TestBed, inject } from '@angular/core/testing';

import { StatAdminServiceService } from './stat-admin-service.service';

describe('StatAdminServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatAdminServiceService]
    });
  });

  it('should be created', inject([StatAdminServiceService], (service: StatAdminServiceService) => {
    expect(service).toBeTruthy();
  }));
});
