import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {

  songs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.songs = [
          'Cold Water',
          'Provider',
          'God of Joy',
          'Boopity Bop',
          'Boop Boop Bop',
          'Beep',
          'Bibble Bop'
      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }

}
