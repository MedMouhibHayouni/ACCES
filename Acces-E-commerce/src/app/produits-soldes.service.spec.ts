import { TestBed } from '@angular/core/testing';

import { ProduitsSoldesService } from './produits-soldes.service';

describe('ProduitsSoldesService', () => {
  let service: ProduitsSoldesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitsSoldesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
