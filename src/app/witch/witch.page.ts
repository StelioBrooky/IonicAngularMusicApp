import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Howl } from 'howler';

export interface Track {
  name: string;
  path: string;
  nav: string;
}

@Component({
  selector: 'app-witch',
  templateUrl: './witch.page.html',
  styleUrls: ['./witch.page.scss'],
})
export class WitchPage implements OnInit {

  song: Track = {
    name: 'Witch Doctor',
    path: 'assets/mp3/WitchDoctor.mp3',
    nav: 'witch'
  }

  howler: Howl = null;
  activeTrack: Track = null;
  playing: boolean = false;

  constructor(private route: Router ) { 
  }

  ngOnInit() {
  }

  start() {
    if (this.howler) {
      this.howler.stop();
    }

    this.howler = new Howl({
      src: [this.song.path],
      html5: true,
      onplay: () => {
        this.playing = true;
        console.log('onplay');
        this.activeTrack = this.song;
      },
      onend: () => {
        console.log('onend');
      }
    });
    this.howler.play();
}

playPause(status) {

  // if this is our first time playing a track, run the start function
  if (!this.activeTrack) {
    this.start();
  }
    //if it is playing, pause it, if it is paused, play it
    this.playing = !status;
    if (status) {
      this.howler.pause();
    }
    else {
      this.howler.play();
    }

  }

  homeNav(){
    if(this.activeTrack){
      this.howler.stop();
    }
    this.activeTrack = null;
    this.route.navigate(['/home']);
  }

}