import { TestBed } from '@angular/core/testing';

import { UserGateway } from './user.gateway';

describe('UserGateway', () => {
  let gateway: UserGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    gateway = TestBed.inject(UserGateway);
  });

  it('should be created', () => {
    expect(gateway).toBeTruthy();
  });
});
