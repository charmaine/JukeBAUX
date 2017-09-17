import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

displayData : any;
id: number;
data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.id = this.navParams.get('id');

  this.displayData = [
  {
     "id": 1,
     "song": "Hotline Bling",
     "artist": "Drake",
     "album": "./assets/img/drake.png"
   },
   {
      "id": 2,
      "song": "AAA",
      "artist": "Drake",
      "album": "./assets/img/drake.png"
    },
    {
       "id": 3,
       "song": "BB",
       "artist": "Drake",
       "album": "./assets/img/drake.png"
     },
     {
        "id": 4,
        "song": "HCCC",
        "artist": "Drake",
        "album": "./assets/img/drake.png"
      },
      {
         "id": 5,
         "song": "DDD",
         "artist": "Drake",
         "album": "./assets/img/drake.png"
       }
   ];

  this.data = this.displayData[this.id];

    for(let data of this.displayData) {
      if (data.id == this.id)
       this.data= this.data;
    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
