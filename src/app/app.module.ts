import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { SpotifyService } from '.././spotify-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UpcomingPage } from '../pages/upcoming/upcoming';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBtYdIqU2k4xgd-w2-56WGoF0KJMFykc8I",
  authDomain: "htn2017-55694.firebaseapp.com",
  databaseURL: "https://htn2017-55694.firebaseio.com/",
  storageBucket: "gs://htn2017-55694.appspot.com"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UpcomingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UpcomingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpotifyService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
