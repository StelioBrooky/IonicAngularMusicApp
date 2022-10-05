import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Howl } from 'howler';



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

howler: Howl = null;
activeTrack: Track = null;
playing: boolean = false;

  constructor(private route: Router) {}

  start(track: Track) {
    if (this.howler) {
      this.howler.stop();
    }

    this.howler = new Howl({
      src: [track.path],
      html5: true,
      onplay: () => {
        this.playing = true;
        console.log('onplay');
        this.activeTrack = track;
      },
      onend: () => {
        console.log('onend');
      }
    });
    this.howler.play();
}

playPause(status) {
    //if it is playing, pause it, if it is paused, play it
    this.playing = !status;
    if (status) {
      this.howler.pause();
    }
    else {
      this.howler.play();
    }

  }

  loginNav(){
    this.route.navigate(['/login']);
  }

}
