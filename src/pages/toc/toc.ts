import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter01 } from '../chapter01/chapter01';
import { Chapter02 } from '../chapter02/chapter02';
import { Chapter03 } from '../chapter03/chapter03';


@IonicPage()
@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html',
})
export class TocPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TocPage');
  }

  chapter01() {
    this.navCtrl.push(Chapter01);
  }
  chapter02() {
    this.navCtrl.push(Chapter02);
  }
  chapter03() {
    this.navCtrl.push(Chapter03);
  }

}
