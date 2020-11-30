import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'Motorista',
    loadChildren: () => import('./pages/motorista/motorista.module').then( m => m.MotoristaPageModule)
  },
  {
    path: 'Passageiro',
    loadChildren: () => import('./pages/passageiro/passageiro.module').then( m => m.PassageiroPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'exibir-usuario/:id',
    loadChildren: () => import('./pages/exibir-usuario/exibir-usuario.module').then( m => m.ExibirUsuarioPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
