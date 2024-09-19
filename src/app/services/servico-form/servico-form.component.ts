import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';

import { BaseFormDirective } from 'src/app/shared/base-form/base-form.directive';
import { ServicoService } from '../service/servico.service';

@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.css']
})
export class ServicoFormComponent extends BaseFormDirective implements OnInit {

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ServicoService,
    private modal: AlertModalService,
    private location: Location
  ) {
    super();
  }

  ngOnInit() {
    const servico = this.route.snapshot.data['profissionais'];

    this.formulario = this.fb.group({
      id: [servico.id],
      nome: [servico.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      profissionais: [servico.profissional, [Validators.required]],
    });
  }

  submit(){
    this.submitted = true;
    console.log(this.formulario.value);
    if(this.formulario.valid){
      console.log('submit');

      let msgSuccess = 'Serviço cadastrado com sucesso!';
      let msgError = 'Erro ao cadastrar serviço, tente novamente!';
      if(this.formulario.value.id) {
        msgSuccess = 'Serviço atualizado com sucesso!';
        msgError = 'Erro ao atualizar serviço, tente novamente!';
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
