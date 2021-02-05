import { TestBed } from '@angular/core/testing';

import { LanguageGateway } from './language.gateway';

describe('LanguageGateway', () => {
  let gateway: LanguageGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    gateway = TestBed.inject(LanguageGateway);
  });

  it('should be created', () => {
    expect(gateway).toBeTruthy();
  });
});
