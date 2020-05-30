import { TestBed } from '@angular/core/testing';

import { YtubeApiServiceService } from './ytube-api-service.service';

describe('YtubeApiServiceService', () => {
  let service: YtubeApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YtubeApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
