import { ProfissionaisFormComponent } from './profissionais-form/profissionais-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfissionaisComponent } from './profissionais-lista/profissionais.component';

const routes: Routes = [
  {path: '', component: ProfissionaisComponent},
  {path: 'novo', component: ProfissionaisFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfissionaisRoutingModule { }
