import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter03 } from '../chapter03/chapter03';

/**
 * Generated class for the Page08Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page08',
  templateUrl: 'page08.html',
})
export class Page08 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page08');
  }
  chapter03() {
    this.navCtrl.push(Chapter03);
  }

}
