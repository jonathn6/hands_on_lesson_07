import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page05 } from '../page05/page05';
import { Chapter03 } from '../chapter03/chapter03';

/**
 * Generated class for the Page06Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page06',
  templateUrl: 'page06.html',
})
export class Page06 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page06');
  }

  page05() {
    this.navCtrl.push(Page05);
  }

  chapter03() {
    this.navCtrl.push(Chapter03);
  }

}
