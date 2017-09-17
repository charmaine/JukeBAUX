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

  this.http.get("http://9e8b6592.ngrok.io/songs/?format=json").subscribe(res => {
       this.songs= res.json();
  });

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
