import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page03 } from '../page03/page03';
import { Page05 } from '../page05/page05';

/**
 * Generated class for the Chapter02Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter02',
  templateUrl: 'chapter02.html',
})
export class Chapter02 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter02');
  }
  page03() {
    this.navCtrl.push(Page03);
  }
  page05() {
    this.navCtrl.push(Page05);
  }

}
