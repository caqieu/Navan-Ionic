import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassageiroPageRoutingModule } from './passageiro-routing.module';

import { PassageiroPage } from './passageiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassageiroPageRoutingModule
  ],
  declarations: [PassageiroPage]
})
export class PassageiroPageModule {}
