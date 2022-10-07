import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { File } from '@ionic-native/file';

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
  //list of songs
  playlists: Track[] = [{
    name: 'Coconut',
    path: 'assets/mp3/Coconut.mp3',
    nav: 'coconut'
  },
  {
    name: 'Who Let The Dogs Out?',
    path: 'assets/mp3/WhoLetTheDogsOut.mp3',
    nav: 'dogs'
  },
  {
    name: 'Witch Doctor',
    path: 'assets/mp3/WitchDoctor.mp3',
    nav: 'witch'
  },
  {
    name: 'Candyman',
    path: 'assets/mp3/CandyMan.mp3',
    nav: 'candyman'
  },
  {
    name: 'Kotahitanga',
    path: 'assets/mp3/Kotahitanga.mp3',
    nav: 'kotahitanga'
  },
  {
    name: 'Keep On Moving!',
    path: 'assets/mp3/KeepOnMovin.mp3',
    nav: 'moving'
  },
];



  constructor(private route: Router, public aFS: AngularFireStorage){
    this.addToStorage();
  }
  

  bluetoothNav(){
    this.route.navigate(['/bluetooth']);
  }
  songNav(songNav){
    this.route.navigate(['/'+songNav]);
  }

  
  addToStorage(){ // Upload tracks to storage
    // storage
    for (let i of this.playlists) {
      let filename = '';
      if (i.path.includes('Coconut')){
        filename = 'Coconut.mp3';
      }
      if (i.path.includes('WhoLetTheDogsOut')){
        filename = 'WhoLetTheDogsOut.mp3';
      }
      if (i.path.includes('WitchDoctor')){
        filename = 'WitchDoctor.mp3';
      }
      if (i.path.includes('CandyMan')){
        filename = 'CandyMan.mp3';
      }
      if (i.path.includes('Kotahitanga')){
        filename = 'Kotahitanga.mp3';
      }
      if (i.path.includes('KeepOnMovin')){
        filename = 'KeepOnMovin.mp3';
      }

      
      const file = File.readAsDataURL(i.path, filename);
      this.aFS.upload('music/' + i.name, file, {contentType: 'audio/mp3'} );
    }
  }
}
