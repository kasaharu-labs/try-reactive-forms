import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../domain/album';

@Injectable({
  providedIn: 'root',
})
export class AlbumGateway {
  constructor(private readonly _http: HttpClient) {}

  getAlbums(userId: number): Observable<Album[]> {
    return this._http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  }
}
