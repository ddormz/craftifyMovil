import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizacionesPageRoutingModule } from './cotizaciones-routing.module';

import { CotizacionesPage } from './cotizaciones.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizacionesPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [CotizacionesPage]
})
export class CotizacionesPageModule {}
