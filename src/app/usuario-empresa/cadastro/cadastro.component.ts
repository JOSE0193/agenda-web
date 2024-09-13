import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { BaseFormDirective } from 'src/app/shared/base-form/base-form.directive';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioEmpresaService } from '../usuario-empresa.service';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { ValidateBrService } from 'angular-validate-br';
import { Location } from '@angular/common';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../auth.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent extends BaseFormDirective implements OnInit {

  usuario: Usuario = new Usuario();

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: UsuarioEmpresaService,
    private modal: AlertModalService,
    private validateBrService: ValidateBrService,
    private location: Location,
    private authService: AuthService
  )
    {
    super();
    }

  ngOnInit() {
    const usuario = this.route.snapshot.data['usuario'];

    this.formulario = this.fb.group({
      id: [usuario.id],
      nome: [usuario.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [usuario.email, [Validators.required, Validators.email]],
      cnpj: [usuario.cpf, [Validators.required, this.validateBrService.cpf]],
      senha: [usuario.senha, [Validators.required, CustomValidators.password]],
    });
  }


  submit(){
    this.submitted = true;
    console.log(this.formulario.value);
    if(this.formulario.valid){
      console.log('submit');

      let msgSuccess = 'Usuário cadastrado com sucesso!';
      let msgError = 'Erro ao cadastrar usuário, tente novamente!';
      if(this.formulario.value.id) {
        msgSuccess = 'Usuário atualizado com sucesso!';
        msgError = 'Erro ao atualizar cadastro, tente novamente!';
      }
      this.service.save(this.formulario.value, this.formulario.value.id).subscribe(
        success => {
          this.modal.showAlertSuccess(msgSuccess);
          this.location.back();
        },
        error => this.modal.showAlertDanger(msgError)
      );
    }
  }

  register(){
    this.authService.fazerLogin(this.usuario);
    this.submit();
  }

  onCancel(){
    this.submitted = false;
    this.resetar();
    this.router.navigate(['/']);
  }


}
