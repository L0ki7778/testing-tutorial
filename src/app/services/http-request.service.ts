import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { CalculatorService } from './calculator.service';
import { map, Observable } from 'rxjs';
import { Pokemon, PokemonJSON } from '../../../mock-data/pokemon';

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

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get(`${this.api}/v2/pokemon/1?limit=20`).pipe(
      map((res: any) => res['payload'])
    );
  }

  savePokemon(pokemon: Pokemon) {
    return this.http.put(`${this.api}/v2/pokemon/3`, pokemon)
  }
}
