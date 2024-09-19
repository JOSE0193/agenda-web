import { FrameRegisterComponent } from './shared/frame-register/frame-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FramePageComponent } from './shared/frame-page/frame-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: FrameRegisterComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./usuario-empresa/usuario.module').then(m => m.UsuarioModule)
      }
    ]
  },


  {
    path: 'agendamentos',
    component:FramePageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./agendamentos/agendamentos.module').then(m => m.AgendamentosModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'clientes',
        loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule),
        canActivate: [AuthGuard]
      },

      {
        path: 'profissionais',
        loadChildren: () => import('./profissionais/profissionais.module').then(m => m.ProfissionaisModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'servicos',
        loadChildren: () => import('./services/servico.module').then(m => m.ServicoModule),
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
