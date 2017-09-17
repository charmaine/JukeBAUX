import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpcomingPage } from '../upcoming/upcoming';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage({
   name: 'login',
   segment: 'login'
 })
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  navTo(){
    window.location.href = 'https://accounts.spotify.com/authorize?response_type=code&client_id=cc620b3e528040b8b0261cbe6d3efa88&redirect_uri=http%3A%2F%2Flocalhost%3A8100%2F%23%2Fredirect&scope=user-modify-playback-state%20user-read-playback-state%20playlist-modify-public';
  }

}
