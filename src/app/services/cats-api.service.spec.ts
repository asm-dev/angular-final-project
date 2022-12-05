import { TestBed } from '@angular/core/testing';

import { CatsAPIService } from './cats-api.service';

describe('CatsAPIService', () => {
  let service: CatsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
