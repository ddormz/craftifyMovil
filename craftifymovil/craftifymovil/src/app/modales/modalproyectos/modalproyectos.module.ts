import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalproyectosPageRoutingModule } from './modalproyectos-routing.module';

import { ModalproyectosPage } from './modalproyectos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalproyectosPageRoutingModule
  ],
  declarations: [ModalproyectosPage]
})
export class ModalproyectosPageModule {}
