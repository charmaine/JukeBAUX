import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { SpotifyService } from '../../spotify-service';

/**
 * Generated class for the RedirectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-redirect',
  templateUrl: 'redirect.html',
})
@Injectable()
export class RedirectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private spotifyService: SpotifyService) {
    var parameters: String = window.location.search.substr(1);
    console.log(parameters);
    console.log(window.location.search.substr(0));
    window.location.href = 'http://localhost:8100/#/home'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedirectPage');
  }

}
