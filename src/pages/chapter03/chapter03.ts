import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page06 } from '../page06/page06';
import { Page08 } from '../page08/page08';

/**
 * Generated class for the Chapter03Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter03',
  templateUrl: 'chapter03.html',
})
export class Chapter03 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter03');
  }
  page06() {
    this.navCtrl.push(Page06);
  }
  page08() {
    this.navCtrl.push(Page08);
  }

}
