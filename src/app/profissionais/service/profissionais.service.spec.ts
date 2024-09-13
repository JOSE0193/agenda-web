/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProfissionaisService } from './profissionais.service';

describe('Service: Profissionais', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfissionaisService]
    });
  });

  it('should ...', inject([ProfissionaisService], (service: ProfissionaisService) => {
    expect(service).toBeTruthy();
  }));
});
