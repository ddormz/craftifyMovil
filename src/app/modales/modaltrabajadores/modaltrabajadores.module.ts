import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaltrabajadoresPageRoutingModule } from './modaltrabajadores-routing.module';

import { ModaltrabajadoresPage } from './modaltrabajadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaltrabajadoresPageRoutingModule
  ],
  declarations: [ModaltrabajadoresPage]
})
export class ModaltrabajadoresPageModule {}
