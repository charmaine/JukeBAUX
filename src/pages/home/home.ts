import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UpcomingPage } from '../upcoming/upcoming';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  displayName;
  displayData : any;
  upcomingPage = UpcomingPage;
  id = this.id

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;
        return;
      }
      this.displayName = user.displayName;
    });

    this.displayData = [
     {
       "id": 1,
       "song": "Pendulum",
       "artist": "FKA Twig",
       "album": "../assets/img/fka.jpg"
     }
   ];
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
    this.navCtrl.push(UpcomingPage);
  }
}
