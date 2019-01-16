import { TestBed, inject } from '@angular/core/testing';

import { ServicerecService } from './servicerec.service';

describe('ServicerecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicerecService]
    });
  });

  it('should be created', inject([ServicerecService], (service: ServicerecService) => {
    expect(service).toBeTruthy();
  }));
});
