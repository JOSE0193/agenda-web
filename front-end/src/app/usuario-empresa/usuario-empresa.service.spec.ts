import { TestBed } from '@angular/core/testing';

import { UsuarioEmpresaService } from './usuario-empresa.service';

describe('UsuarioEmpresaService', () => {
  let service: UsuarioEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
