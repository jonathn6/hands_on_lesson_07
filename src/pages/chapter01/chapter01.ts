import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TocPage } from '../toc/toc';
import { Page02 } from '../page02/page02';

@IonicPage()
@Component({
  selector: 'page-chapter01',
  templateUrl: 'chapter01.html',
})
export class Chapter01 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter01');
  }
  
  toc() {
    this.navCtrl.push(TocPage);
  }
  page02() {
    this.navCtrl.push(Page02);
  }

}
