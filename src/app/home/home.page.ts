import { Component } from '@angular/core';

export interface Track {
  name: string;
  path: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  playlists: Track[] = [{
    name: 'Coconut',
    path: 'assets/mp3/Coconut.mp3'
  },
]

activeTrack: Track = null;

  constructor() {}

  start(track: Track) {
    this.activeTrack = track;
    const audio = new Audio(track.path);
    audio.play();
  }
}
