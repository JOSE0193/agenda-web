import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ValidateBrService } from 'angular-validate-br';
import { map } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';

import { BaseFormDirective } from 'src/app/shared/base-form/base-form.directive';
import { ProfissionaisService } from '../service/profissionais.service';

@Component({
  selector: 'app-profissionais-form',
  templateUrl: './profissionais-form.component.html',
  styleUrls: ['./profissionais-form.component.css']
})
export class ProfissionaisFormComponent extends BaseFormDirective implements OnInit {

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ProfissionaisService,
    private modal: AlertModalService,
    private location: Location
  ) {
    super();
  }

  ngOnInit() {
    const profissional = this.route.snapshot.data['profissionais'];

    this.formulario = this.fb.group({
      id: [profissional.id],
      nome: [profissional.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [profissional.email, [Validators.required, Validators.email]],
      servico: [profissional.servicos, [Validators.required]],
      agendamentos: [profissional.agendamentos, [Validators.required]]

    });
  }


  submit(){
    this.submitted = true;
    console.log(this.formulario.value);
    if(this.formulario.valid){
      console.log('submit');

      let msgSuccess = 'Profissional cadastrado com sucesso!';
      let msgError = 'Erro ao cadastrar profissional, tente novamente!';
      if(this.formulario.value.id) {
        msgSuccess = 'Profissional atualizado com sucesso!';
        msgError = 'Erro ao atualizar profissional, tente novamente!';
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
