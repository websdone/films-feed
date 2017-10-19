import { TestBed, inject } from '@angular/core/testing';

import { ApiFeedService } from './api-feed.service';

describe('ApiFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiFeedService]
    });
  });

  it('should be created', inject([ApiFeedService], (service: ApiFeedService) => {
    expect(service).toBeTruthy();
  }));
});
