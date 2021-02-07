import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../domain/user';

@Injectable({
  providedIn: 'root',
})
export class UserGateway {
  constructor(private readonly _http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
