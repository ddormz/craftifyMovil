import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulariotareaPageRoutingModule } from './formulariotarea-routing.module';

import { FormulariotareaPage } from './formulariotarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulariotareaPageRoutingModule
  ],
  declarations: [FormulariotareaPage]
})
export class FormulariotareaPageModule {}
