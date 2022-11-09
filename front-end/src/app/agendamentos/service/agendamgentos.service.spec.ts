import { TestBed } from '@angular/core/testing';

import { AgendamgentosService } from './agendamgentos.service';

describe('AgendamgentosService', () => {
  let service: AgendamgentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendamgentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
