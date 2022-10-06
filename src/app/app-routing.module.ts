import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'bluetooth',
    loadChildren: () => import('./bluetooth/bluetooth.module').then( m => m.BluetoothPageModule)
  },
  {
    path: 'coconut',
    loadChildren: () => import('./coconut/coconut.module').then( m => m.CoconutPageModule)
  },
  {
    path: 'dogs',
    loadChildren: () => import('./dogs/dogs.module').then( m => m.DogsPageModule)
  },
  {
    path: 'candyman',
    loadChildren: () => import('./candyman/candyman.module').then( m => m.CandymanPageModule)
  },
  {
    path: 'witch',
    loadChildren: () => import('./witch/witch.module').then( m => m.WitchPageModule)
  },
  {
    path: 'kotahitanga',
    loadChildren: () => import('./kotahitanga/kotahitanga.module').then( m => m.KotahitangaPageModule)
  },
  {
    path: 'moving',
    loadChildren: () => import('./moving/moving.module').then( m => m.MovingPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
