import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandymanPageRoutingModule } from './candyman-routing.module';

import { CandymanPage } from './candyman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandymanPageRoutingModule
  ],
  declarations: [CandymanPage]
})
export class CandymanPageModule {}
