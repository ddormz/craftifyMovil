import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalavancesPage } from './modalavances.page';

const routes: Routes = [
  {
    path: '',
    component: ModalavancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalavancesPageRoutingModule {}
