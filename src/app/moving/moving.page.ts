import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Howl } from 'howler';

export interface Track {
  name: string;
  path: string;
  nav: string;
}

@Component({
  selector: 'app-moving',
  templateUrl: './moving.page.html',
  styleUrls: ['./moving.page.scss'],
})
export class MovingPage implements OnInit {

  //The track we want to play
  song: Track = {
    name: 'Keep On Moving!',
    path: 'assets/mp3/KeepOnMovin.mp3',
    nav: 'moving'
  }

  //this is the object that will play our track
  howler: Howl = null;
  //this is the object that will hold our active track
  activeTrack: Track = null;
  //this is the variable that will hold the status of our track (playing/paused)
  playing: boolean = false;

  constructor(private route: Router ) { 
  }

  ngOnInit() {
  }

  start() {
    //if we are playing a track, stop it
    if (this.howler) {
      this.howler.stop();
    }

    //set the howler object to the track we want to play
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