import { TestBed, inject } from '@angular/core/testing';

import { MeetingServiceService } from './meeting-service.service';

describe('MeetingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetingServiceService]
    });
  });

  it('should be created', inject([MeetingServiceService], (service: MeetingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
