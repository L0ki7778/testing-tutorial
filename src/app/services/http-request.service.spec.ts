import { fakeAsync, TestBed } from '@angular/core/testing';

import { HttpRequestService } from './http-request.service';
import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Pokemon, POKEMON, PokemonJSON } from '../../../mock-data/pokemon';

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

  it('should fetch a single pokemon', () => {

    service.getPokemon('pikachu').subscribe(data => {
      expect(data).toEqual({ pokemon: { name: 'Pikachu' } })
    });

    const req = httpTestingController.expectOne('https://pokeapi.co/api/v2/pokemon/pikachu');

    expect(req.request.method).toEqual('GET')

    req.flush({ pokemon: { name: 'Pikachu' } })

  })

  it('should fetch a list of pokemon', () => {

    service.getPokemonList().subscribe(list => {

      expect(list.length).toBe(20)

      expect(list['0'].name).toEqual('Bisasam')
      expect(list['1'].type).toEqual('fire', "got the wrong value");
      expect(list['1'].type).withContext('got the wrong value').toEqual('fire')

    });


    const req = httpTestingController.expectOne(`${service.api}/v2/pokemon/1?limit=20`);

    expect(req.request.method).toEqual('GET');

    req.flush({ payload: Object.values(POKEMON) })


  })


  it('should fail to PUT a pokemon', () => {
    const changes: Partial<Pokemon> = { name: 'Felori' }

    service.savePokemon({ ...POKEMON['1'], ...changes }).subscribe(
      // () => {
      //   fail('the object modification should fail')
      // },

      // (error: HttpErrorResponse) => {
      //   expect(error.status).toBe(500);
      // }

      {
        next: () => {
          fail('the object modification should fail')
        },

        error: (error: HttpErrorResponse) => {
          expect(error.status).toBe(500);
        }
      }
    )

    const req = httpTestingController.expectOne('https://pokeapi.co/api/v2/pokemon/3');
    expect(req.request.method).toEqual('PUT');

    req.flush('Modification failed', { status: 500, statusText: "Internal Server Error" })

  })

  afterEach(() => {
    httpTestingController.verify()
  })
});
