import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { CalculatorService } from './calculator.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  api = 'https://pokeapi.co/api';
  private http = inject(HttpClient)
  private logger = inject(LoggerService)
  private calculator = inject(CalculatorService)


  constructor() {
    this.calculator.addition(2, 2);
    this.calculator.subtraction(5, 3);
  }

  getPokemon(name: string) {
    const result = this.calculator.addition(1, 2)
    this.logger.log(result)

    return this.http.get(`${this.api}/v2/pokemon/${name}`)
  }
}
