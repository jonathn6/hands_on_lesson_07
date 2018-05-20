import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter01 } from '../chapter01/chapter01';
import { Page03 } from '../page03/page03';

/**
 * Generated class for the Page02Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page02',
  templateUrl: 'page02.html',
})
export class Page02 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page02');
  }  

  chapter01() {
    this.navCtrl.push(Chapter01);
  }

  page03() {
    this.navCtrl.push(Page03);
  }

}
