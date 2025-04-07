import { TestBed } from '@angular/core/testing';

import { MoodTrackingService } from './mood-tracking.service';

describe('MoodTrackingService', () => {
  let service: MoodTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoodTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
