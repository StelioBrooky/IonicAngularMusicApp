import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WitchPageRoutingModule } from './witch-routing.module';

import { WitchPage } from './witch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WitchPageRoutingModule
  ],
  declarations: [WitchPage]
})
export class WitchPageModule {}
