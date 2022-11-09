import { AgendamentosFormComponent } from './agendamentos-form/agendamentos-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentosComponent } from './agendamentos-lista/agendamentos.component';

const routes: Routes = [
  { path: '', component: AgendamentosComponent },
  { path: 'novo', component: AgendamentosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentosRoutingModule { }
