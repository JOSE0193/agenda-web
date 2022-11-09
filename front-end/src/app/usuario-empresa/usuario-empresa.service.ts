import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/crud-service/crud.service';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioEmpresaService extends CrudService<Usuario, number>{

    constructor(
      protected _http: HttpClient
      ) {
        super(_http, `${environment.API}/empresa`);
      }
}
