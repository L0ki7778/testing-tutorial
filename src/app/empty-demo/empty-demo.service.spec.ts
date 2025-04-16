import { TestBed } from '@angular/core/testing';

import { EmptyDemoService } from './empty-demo.service';

describe('EmptyDemoService', () => {
  let service: EmptyDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmptyDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
