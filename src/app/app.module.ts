import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database'; // Test after making a database. Add AngularFireDatabaseModule to imports too.
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // Test after setting up storage.
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule, AngularFireStorageModule],
  providers: [BluetoothSerial, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
