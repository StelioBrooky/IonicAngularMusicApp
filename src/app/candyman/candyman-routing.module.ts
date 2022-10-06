import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandymanPage } from './candyman.page';

const routes: Routes = [
  {
    path: '',
    component: CandymanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandymanPageRoutingModule {}
