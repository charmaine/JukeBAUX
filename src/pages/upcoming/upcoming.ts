import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

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
  detailPage = DetailPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.songs = [
      {
        "id": 1,
        "title": "Hotline Bling"
      },
      {
        "id": 2,
        "title": "Provider"
      },
      {
        "id": 3,
        "title": "God of Joy"
      },
      {
        "id": 4,
        "title": "Boopity Bop"
      },
      {
        "id": 5,
        "title": "Bop Bop Bop"
      },
      {
        "id": 6,
        "title": "Bop to the top"
      }
    ];
  }

  more(id){
    this.navCtrl.push(DetailPage, {id: id});
    console.log({id:id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }
}
