import { TestBed } from '@angular/core/testing';

import { HttpPracticeService } from './http-practice.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('HttpPracticeService', () => {
  let service: HttpPracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(HttpPracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
