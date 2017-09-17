import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UpcomingPage } from '../upcoming/upcoming';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SpotifyService } from '../../spotify-service';
import { Storage } from '@ionic/storage';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@IonicPage({
  name: 'home',
  segment: 'home'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage {

  displayName;
  displayData : any;
  upcomingPage = UpcomingPage;
  id = this.id

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private spotifyService: SpotifyService, private storage: Storage) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;
        return;
      }
    });

    spotifyService.getAuthorizationCode(this.storage.get("code"));

    this.displayName = this.storage.get("code");
    console.log(this.storage.get("code"));

    this.displayData = {
       "id": 1,
       "song": "Pendulum",
       "artist": "FKA Twig",
       "album": "./assets/img/fka.jpg"
     };
  }

  signInWithEmail() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.EmailAuthProvider())
      .then(res => console.log(res));
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  navTo(){
    this.navCtrl.push('UpcomingPage');
  }
}
