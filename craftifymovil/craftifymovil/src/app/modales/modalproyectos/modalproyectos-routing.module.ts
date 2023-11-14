import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalproyectosPage } from './modalproyectos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalproyectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalproyectosPageRoutingModule {}
