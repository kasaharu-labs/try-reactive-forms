import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../domain/user';

@Injectable({
  providedIn: 'root',
})
export class UserGateway {
  constructor(private readonly _http: HttpClient) {}
  private _users$ = new BehaviorSubject<User[] | null>(null);
  get users$() {
    return this._users$.asObservable();
  }

  getUsers(): void {
    this._http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe((users) => {
      this._users$.next(users);
    });
  }
}
