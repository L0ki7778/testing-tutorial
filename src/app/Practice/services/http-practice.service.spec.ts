import { TestBed } from '@angular/core/testing';

import { HttpPracticeService } from './http-practice.service';

describe('HttpPracticeService', () => {
  let service: HttpPracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
