import { fakeAsync, TestBed } from '@angular/core/testing';

import { HttpRequestService } from './http-request.service';
import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('HttpRequestService', () => {
  let service: HttpRequestService,
    calculatorService: CalculatorService,
    loggerService: LoggerService,
    httpTestingController: HttpTestingController

  beforeEach(() => {
    calculatorService = jasmine.createSpyObj('CalculatorService', ['addition', 'subtraction']);
    loggerService = jasmine.createSpyObj('LoggerService', ['log']);
    TestBed.configureTestingModule({
      providers: [
        HttpRequestService,
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: CalculatorService, useValue: calculatorService },
        { provide: LoggerService, useValue: loggerService }
      ]
    });
    service = TestBed.inject(HttpRequestService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if the calculator methods are called', () => {
    expect(calculatorService.addition).toHaveBeenCalled()
    expect(calculatorService.subtraction).toHaveBeenCalledTimes(1)
  })

  it('should fetch data', fakeAsync(() => {

    service.getPokemon('pikachu').subscribe(data => {
      expect(data).toEqual({ pokemon: { name: 'Pikachu' } })
    })

    const req = httpTestingController.expectOne('https://pokeapi.co/api/v2/pokemon/pikachu');

    expect(req.request.method).toEqual('GET')

    req.flush({ pokemon: { name: 'Pikachu' } })

  }))
});
