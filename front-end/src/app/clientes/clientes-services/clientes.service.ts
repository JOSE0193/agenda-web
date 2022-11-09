import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../cliente';
import { CrudService } from 'src/app/shared/crud-service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService extends CrudService<Cliente, number>{

  constructor(
    protected _http: HttpClient
    ) {
      super(_http, `${environment.API}/clientes`);
    }




  // verificarEmail(email: string) {
  //   return this.http.get(`${environment.API}clientes`)
  //     .pipe(
  //       delay(3000),
  //       map((dados: {clientes: any[]}) => dados.clientes),
  //       // tap(console.log),
  //       map((dados: {email: string}[]) => dados.filter(v => v.email === email)),
  //       // tap(console.log),
  //       map((dados: any[]) => dados.length > 0 )
  //       // tap(console.log)
  //     );
  // }
}
