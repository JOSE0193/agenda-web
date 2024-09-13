import { environment } from './../../../environments/environment.prod';
import { Agendamento } from './../agendamento';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/crud-service/crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService extends CrudService<Agendamento, number>{

  constructor(
    protected _http: HttpClient
    ) {
      super(_http, `${environment.API}/agendamentos`);
    }
}
