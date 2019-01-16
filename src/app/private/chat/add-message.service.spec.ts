import { TestBed, inject } from '@angular/core/testing';

import { AddMessageService } from './add-message.service';

describe('AddMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddMessageService]
    });
  });

  it('should be created', inject([AddMessageService], (service: AddMessageService) => {
    expect(service).toBeTruthy();
  }));
});
