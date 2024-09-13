import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BaseFormDirective } from 'src/app/shared/base-form/base-form.directive';
import { ValidateBrService } from 'angular-validate-br';
import { CustomValidators } from 'ng2-validation';
import { ClientesService } from '../clientes-services/clientes.service';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent extends BaseFormDirective implements OnInit {

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ClientesService,
    private modal: AlertModalService,
    private validateBrService: ValidateBrService,
    private location: Location
  )
    {
    super();
    }

  ngOnInit() {
    const cliente = this.route.snapshot.data['clientes'];

    this.formulario = this.fb.group({
      id: [cliente.id],
      nome: [cliente.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [cliente.email, [Validators.required, Validators.email]],
      dataNascimento: [cliente.dataNascimento, [Validators.required, CustomValidators.date]],
      cpf: [cliente.cpf, [Validators.required, this.validateBrService.cpf]],
    });
  }


  submit(){
    this.submitted = true;
    console.log(this.formulario.value);
    if(this.formulario.valid){
      console.log('submit');

      let msgSuccess = 'Cliente cadastrado com sucesso!';
      let msgError = 'Erro ao cadastrar cliente, tente novamente!';
      if(this.formulario.value.id) {
        msgSuccess = 'Cliente atualizado com sucesso!';
        msgError = 'Erro ao atualizar cliente, tente novamente!';
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

  onCancel(){
    this.submitted = false;
    this.resetar();
  }

}
