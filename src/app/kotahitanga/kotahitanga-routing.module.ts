import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KotahitangaPage } from './kotahitanga.page';

const routes: Routes = [
  {
    path: '',
    component: KotahitangaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KotahitangaPageRoutingModule {}
