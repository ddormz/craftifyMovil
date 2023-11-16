import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalcotizacionesPage } from './modalcotizaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ModalcotizacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalcotizacionesPageRoutingModule {}
