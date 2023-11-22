import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';



import { FormulariotareaPageRoutingModule } from './formulariotarea-routing.module';

import { FormulariotareaPage } from './formulariotarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulariotareaPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [FormulariotareaPage]
})
export class FormulariotareaPageModule {}
