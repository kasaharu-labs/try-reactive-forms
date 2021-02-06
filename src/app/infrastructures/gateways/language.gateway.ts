import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LanguageCase {
  id: number;
  case: string;
  languageId: number;
}

@Injectable({
  providedIn: 'root',
})
export class LanguageGateway {
  constructor() {}
  private _langulages$ = new BehaviorSubject<any>(null);
  private _languageCases$ = new BehaviorSubject<any>(null);

  get langulages$() {
    return this._langulages$.asObservable();
  }

  get langulageCases$() {
    return this._languageCases$.asObservable();
  }

  fetchLanguages(): void {
    const languages = [
      { id: 1, name: '日本語' },
      { id: 2, name: 'English' },
    ];

    this._langulages$.next(languages);
  }

  fetchLanguageCases(languageId: number): void {
    const languageCases: LanguageCase[] = [
      { id: 1, case: 'ひらがな', languageId: 1 },
      { id: 2, case: 'カタカナ', languageId: 1 },
      { id: 3, case: '大文字', languageId: 2 },
      { id: 4, case: '小文字', languageId: 2 },
    ];

    const targetCases = languageCases.filter((languageCase) => languageCase.languageId === languageId);
    this._languageCases$.next(targetCases);
  }
}
