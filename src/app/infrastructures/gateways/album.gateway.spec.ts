import { TestBed } from '@angular/core/testing';

import { AlbumGateway } from './album.gateway';

describe('AlbumGateway', () => {
  let gateway: AlbumGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    gateway = TestBed.inject(AlbumGateway);
  });

  it('should be created', () => {
    expect(gateway).toBeTruthy();
  });
});
