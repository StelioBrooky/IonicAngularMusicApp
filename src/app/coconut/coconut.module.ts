import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoconutPageRoutingModule } from './coconut-routing.module';

import { CoconutPage } from './coconut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoconutPageRoutingModule
  ],
  declarations: [CoconutPage]
})
export class CoconutPageModule {}
