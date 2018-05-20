import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TocPage } from '../toc/toc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  pushPage;
  constructor(public navCtrl: NavController) {
    this.pushPage = TocPage;
  }

  onTap() {
    this.navCtrl.push(TocPage);
  }

}
