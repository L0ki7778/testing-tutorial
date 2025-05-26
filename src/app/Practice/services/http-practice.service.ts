import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../practice-mock-data';

@Injectable({
  providedIn: 'root'
})
export class HttpPracticeService {
  http = inject(HttpClient)

  constructor() { }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
