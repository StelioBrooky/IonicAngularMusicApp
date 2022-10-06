import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KotahitangaPageRoutingModule } from './kotahitanga-routing.module';

import { KotahitangaPage } from './kotahitanga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KotahitangaPageRoutingModule
  ],
  declarations: [KotahitangaPage]
})
export class KotahitangaPageModule {}
