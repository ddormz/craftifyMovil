import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvancesPageRoutingModule } from './avances-routing.module';

import { AvancesPage } from './avances.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvancesPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [AvancesPage]
})
export class AvancesPageModule {}
