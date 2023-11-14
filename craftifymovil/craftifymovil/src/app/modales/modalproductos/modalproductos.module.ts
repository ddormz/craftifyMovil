import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalproductosPageRoutingModule } from './modalproductos-routing.module';

import { ModalproductosPage } from './modalproductos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalproductosPageRoutingModule
  ],
  declarations: [ModalproductosPage]
})
export class ModalproductosPageModule {}
