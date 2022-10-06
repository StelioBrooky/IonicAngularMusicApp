import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoconutPage } from './coconut.page';

const routes: Routes = [
  {
    path: '',
    component: CoconutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoconutPageRoutingModule {}
