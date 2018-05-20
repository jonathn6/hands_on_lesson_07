import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page02 } from '../page02/page02';
import { Chapter02 } from '../chapter02/chapter02';

/**
 * Generated class for the Page03Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page03',
  templateUrl: 'page03.html',
})
export class Page03 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page03');
  }

  page02() {
    this.navCtrl.push(Page02);
  }

  chapter02() {
    this.navCtrl.push(Chapter02);
  }

}
