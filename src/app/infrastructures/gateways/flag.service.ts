import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from 'src/app/domain/album';
import { Condition } from '../../domain/condition';

@Injectable({
  providedIn: 'root',
})
export class FlagService {
  constructor(private readonly _http: HttpClient) {}
  private _flags$ = new BehaviorSubject<Condition[] | null>(null);

  get flags$() {
    return this._flags$.asObservable();
  }

  buildTodoConditions() {
    const conditions: Condition[] = [
      { id: 1, condition: 'completed' },
      { id: 2, condition: 'uncompleted' },
    ];
    this._flags$.next(conditions);
  }

  async buildPhotoConditions(userId: number) {
    const albums: Album[] = await this._http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`).toPromise();
    const conditions: Condition[] = albums.map((album) => ({ id: album.id + 2, condition: `${album.id}: ${album.title}` }));
    this._flags$.next(conditions);
  }
}
