import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { AgendamentosComponent } from './agendamentos-lista/agendamentos.component';
import { SharedModule } from '../shared/shared.module';
import { AgendamentosFormComponent } from './agendamentos-form/agendamentos-form.component';

@NgModule({
  declarations: [
    AgendamentosComponent,
    AgendamentosFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgendamentosRoutingModule,
    SharedModule
  ],
  exports: [
    AgendamentosComponent,
    AgendamentosFormComponent
  ]
})
export class AgendamentosModule { }
