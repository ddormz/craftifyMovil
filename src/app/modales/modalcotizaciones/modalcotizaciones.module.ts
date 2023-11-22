import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalcotizacionesPageRoutingModule } from './modalcotizaciones-routing.module';

import { ModalcotizacionesPage } from './modalcotizaciones.page';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalcotizacionesPageRoutingModule
  ],
  declarations: [ModalcotizacionesPage]
  ,providers: [CurrencyPipe]
})
export class ModalcotizacionesPageModule {}
