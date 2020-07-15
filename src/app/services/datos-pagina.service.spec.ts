import { TestBed } from '@angular/core/testing';

import { DatosPaginaService } from './datos-pagina.service';

describe('DatosPaginaService', () => {
  let service: DatosPaginaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPaginaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
