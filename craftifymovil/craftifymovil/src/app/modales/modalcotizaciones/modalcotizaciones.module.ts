import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalcotizacionesPageRoutingModule } from './modalcotizaciones-routing.module';

import { ModalcotizacionesPage } from './modalcotizaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalcotizacionesPageRoutingModule
  ],
  declarations: [ModalcotizacionesPage]
})
export class ModalcotizacionesPageModule {}
