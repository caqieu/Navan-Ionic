import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotoristaPageRoutingModule } from './motorista-routing.module';

import { MotoristaPage } from './motorista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotoristaPageRoutingModule
  ],
  declarations: [MotoristaPage]
})
export class MotoristaPageModule {}
