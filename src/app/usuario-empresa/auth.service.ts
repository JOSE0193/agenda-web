import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(
    private router: Router
  ) { }

  fazerLogin(usuario: Usuario){
    if(usuario.email === 'usuario@email.com' && usuario.senha === '12345'){
      this.usuarioAutenticado = true;
      this.router.navigate(['/agendamentos'], );
      
    } else{
      this.usuarioAutenticado = false;
    }
  }
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
