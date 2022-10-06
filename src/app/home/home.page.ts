import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { AlertController } from '@ionic/angular';
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

  constructor(private route: Router, private bluetoothSerial: BluetoothSerial, private alertController: AlertController) {
    bluetoothSerial.enable();
  }

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
  unpairedDevices: any;
 pairedDevices: any;
 gettingDevices: boolean;
 
 
 
 startScanning() {
   this.pairedDevices = null;
   this.unpairedDevices = null;
   this.gettingDevices = true;
   const unPair = [];
   this.bluetoothSerial.discoverUnpaired().then((success) => {
     success.forEach((value, key) => {
       var exists = false;
       unPair.forEach((val2, i) => {
         if (value.id === val2.id) {
           exists = true;
         }
       });
       if (exists === false && value.id !== '') {
         unPair.push(value);
       }
     });
     this.unpairedDevices = unPair;
     this.gettingDevices = false;
   },
     (err) => {
       console.log(err);
     });
 
   this.bluetoothSerial.list().then((success) => {
     this.pairedDevices = success;
   },
     (err) => {
 
     });
   }
 
 success = (data) => {
   this.deviceConnected();
 }
 fail = (error) => {
   alert(error);
 }
 
 async selectDevice(id: any) {
 
   const alert = await this.alertController.create({
     header: 'Connect',
     message: 'Do you want to connect with?',
     buttons: [
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Connect',
         handler: () => {
           this.bluetoothSerial.connect(id).subscribe(this.success, this.fail);
         }
       }
     ]
   });
   await alert.present();
 }
 
 deviceConnected() {
   this.bluetoothSerial.isConnected().then(success => {
     alert('Connected Successfullly');
   }, error => {
     alert('error' + JSON.stringify(error));
   });
 }
 
 async disconnect() {
   const alert = await this.alertController.create({
     header: 'Disconnect?',
     message: 'Do you want to Disconnect?',
     buttons: [
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Disconnect',
         handler: () => {
           this.bluetoothSerial.disconnect();
         }
       }
     ]
   });
   await alert.present();
 }
}
