import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  addition(a: number, b: number) {
    return a + b;
  }

  subtraction(a: number, b: number) {
    return a - b;
  }
}
