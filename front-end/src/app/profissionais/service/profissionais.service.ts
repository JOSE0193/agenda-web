import { Profissional } from './../profissional';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/crud-service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService extends CrudService<Profissional, number> {

    constructor(
      protected _http: HttpClient
      ) {
        super(_http, `${environment.API}/profissionais`);
      }

}
