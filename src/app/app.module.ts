import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { SpotifyService } from '.././spotify-service';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UpcomingPage } from '../pages/upcoming/upcoming';
import { DetailPage } from '../pages/detail/detail';
import { RedirectPage } from '../pages/redirect/redirect';
import { LoginPage } from '../pages/login/login';

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
    // HomePage,
    // UpcomingPage,
    // DetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    // UpcomingPage,
    // DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpotifyService,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
