import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulariotareaPage } from './formulariotarea.page';

const routes: Routes = [
  {
    path: '',
    component: FormulariotareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulariotareaPageRoutingModule {}
