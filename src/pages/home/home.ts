import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SpotifyService } from '../../spotify-service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage {

  displayName;

  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private spotifyService: SpotifyService) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;
        return;
      }
      this.displayName = spotifyService.playDefaultDevice();
    });
  }

  signInWithEmail() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.EmailAuthProvider())
      .then(res => console.log(res));
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
