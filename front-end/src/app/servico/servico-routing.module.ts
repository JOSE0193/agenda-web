import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicoFormComponent } from './servico-form/servico-form.component';
import { ServicoListaComponent } from './servico-lista/servico-lista.component';

const routes: Routes = [
  { path: '', component: ServicoListaComponent },
  { path: 'novo', component: ServicoFormComponent },
  { path: 'editar/:id', component: ServicoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
