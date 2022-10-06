import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Howl } from 'howler';



export interface Track {
  name: string;
  path: string;
  nav: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  playlists: Track[] = [{
    name: 'Coconut',
    path: 'assets/mp3/Coconut.mp3',
    nav: 'coconut'
  },
  {
    name: 'Who Let The Dogs Out?',
    path: 'assets/mp3/Coconut.mp3',
    nav: 'dogs'
  },
  {
    name: 'Witch Doctor',
    path: 'assets/mp3/Coconut.mp3',
    nav: 'witch'
  },
  {
    name: 'Candyman',
    path: 'assets/mp3/Coconut.mp3',
    nav: 'candyman'
  },
  {
    name: 'Kotahitanga',
    path: 'assets/mp3/Coconut.mp3',
    nav: 'kotahitanga'
  },
  {
    name: 'Keep On Moving!',
    path: 'assets/mp3/Coconut.mp3',
    nav: 'moving'
  },
];



  constructor(private route: Router, ){}
  

  loginNav(){
    this.route.navigate(['/login']);
  }
  bluetoothNav(){
    this.route.navigate(['/bluetooth']);
  }
  songNav(songNav){
    this.route.navigate(['/'+songNav]);
  }
}
