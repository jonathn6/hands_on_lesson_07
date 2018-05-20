import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter02 } from '../chapter02/chapter02';
import { Page06 } from '../page06/page06';

/**
 * Generated class for the Page05Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page05',
  templateUrl: 'page05.html',
})
export class Page05 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page05');
  }

  chapter02() {
    this.navCtrl.push(Chapter02);
  }

  page06() {
    this.navCtrl.push(Page06);
  }

}
