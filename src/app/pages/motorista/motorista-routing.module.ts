import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotoristaPage } from './motorista.page';

const routes: Routes = [
  {
    path: '',
    component: MotoristaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotoristaPageRoutingModule {}
