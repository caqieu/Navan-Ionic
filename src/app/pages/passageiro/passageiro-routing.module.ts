import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassageiroPage } from './passageiro.page';

const routes: Routes = [
  {
    path: '',
    component: PassageiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassageiroPageRoutingModule {}
