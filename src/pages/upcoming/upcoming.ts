import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

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
  options = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : Http) {

  //this.http.get("http://f155ae88.ngrok.io/songs/?format=json").subscribe(res => {
    //    this.songs= res.json();
    //  });

      this.songs = [
      {
        "id": 1,
        "name": "Hotline Bling"
      },
      {
        "id": 2,
        "name": "A Thousand Miles"
      },
      {
        "id": 3,
        "name": "SexyBack"
      },
      {
        "id": 4,
        "name": "Say You Won't Let Go"
      },
      {
        "id": 5,
        "name": "Roses"
      },
      {
        "id": 6,
        "name": "Something Just Like This"
      }
    ];
  }

  more(id){
    this.navCtrl.push('DetailPage', {id: id});
    console.log({id: id});
  }

  public clear(): void {
    this.songs = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }
}
