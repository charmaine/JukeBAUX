import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UpcomingPage } from '../upcoming/upcoming';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SpotifyService } from '../../spotify-service';

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

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private spotifyService: SpotifyService) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;
        return;
      }

      window.location.href = 'https://accounts.spotify.com/authorize?response_type=code&client_id=cc620b3e528040b8b0261cbe6d3efa88&redirect_uri=http%3A%2F%2Flocalhost%3A8100%2F%23%2Fredirect&scope=user-modify-playback-state%20user-read-playback-state%20playlist-modify-public';

      this.displayName = spotifyService.playDefaultDevice();
    });

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
