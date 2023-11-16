import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalproductosPage } from './modalproductos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalproductosPageRoutingModule {}
