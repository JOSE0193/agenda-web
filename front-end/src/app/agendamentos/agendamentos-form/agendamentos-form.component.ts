import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CustomValidators } from 'ng2-validation';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { BaseFormDirective } from 'src/app/shared/base-form/base-form.directive';
import { AgendamentosService } from '../service/agendamgentos.service';

@Component({
  selector: 'app-agendamentos-form',
  templateUrl: './agendamentos-form.component.html',
  styleUrls: ['./agendamentos-form.component.css']
})
export class AgendamentosFormComponent extends BaseFormDirective implements OnInit {

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: AgendamentosService,
    private modal: AlertModalService,
    private location: Location
  )
    {
    super();
    }

  ngOnInit() {
    const agendamento = this.route.snapshot.data['agendamentos'];

    this.formulario = this.fb.group({
      id: [agendamento.id],
      data: [agendamento.data, [Validators.required, CustomValidators.date]],
      observacoes: [agendamento.observacoes, [Validators.maxLength(200)]],
      cliente: [agendamento.cliente, [Validators.required]],
      servico: [agendamento.servico, [Validators.required]],
      profissional: [agendamento.profissional, [Validators.required]]
    });
  }

  submit(){
    this.submitted = true;
    console.log(this.formulario.value);
    if(this.formulario.valid){
      console.log('submit');

      let msgSuccess = 'Agendamento criado com sucesso!';
      let msgError = 'Erro ao criar agendamento, tente novamente!';
      if(this.formulario.value.id) {
        msgSuccess = 'Agendamento atualizado com sucesso!';
        msgError = 'Erro ao atualizar agendamento, tente novamente!';
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

