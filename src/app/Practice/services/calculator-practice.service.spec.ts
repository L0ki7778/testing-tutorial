import { TestBed } from '@angular/core/testing';

import { CalculatorPracticeService } from './calculator-practice.service';

describe('CalculatorPracticeService', () => {
  let service: CalculatorPracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorPracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
