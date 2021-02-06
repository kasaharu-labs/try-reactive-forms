import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageGateway {
  constructor() {}
  private _langulages$ = new BehaviorSubject<any>(null);

  get langulages$() {
    return this._langulages$.asObservable();
  }

  fetchLanguages(): void {
    const languages = [
      { id: 1, name: '日本語' },
      { id: 2, name: 'English' },
    ];

    this._langulages$.next(languages);
  }
}
