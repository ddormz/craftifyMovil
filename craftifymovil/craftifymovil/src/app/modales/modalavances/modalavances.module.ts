import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalavancesPageRoutingModule } from './modalavances-routing.module';

import { ModalavancesPage } from './modalavances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalavancesPageRoutingModule
  ],
  declarations: [ModalavancesPage]
})
export class ModalavancesPageModule {}
