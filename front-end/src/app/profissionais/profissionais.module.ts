import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfissionaisRoutingModule } from './profissionais-routing.module';
import { ProfissionaisFormComponent } from './profissionais-form/profissionais-form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfissionaisComponent } from './profissionais-lista/profissionais.component';


@NgModule({
  declarations: [
    ProfissionaisComponent,
    ProfissionaisFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProfissionaisRoutingModule,
    SharedModule
  ],
  exports: [
    ProfissionaisComponent,
    ProfissionaisFormComponent
  ]
})
export class ProfissionaisModule { }
