import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TocPage } from '../pages/toc/toc';
import { Chapter01 } from '../pages/chapter01/chapter01';
import { Page02 } from '../pages/page02/page02';
import { Page03 } from '../pages/page03/page03';
import { Chapter02 } from '../pages/chapter02/chapter02';
import { Page05 } from '../pages/page05/page05';
import { Page06 } from '../pages/page06/page06';
import { Chapter03 } from '../pages/chapter03/chapter03';
import { Page08 } from '../pages/page08/page08';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TocPage,
    Chapter01,
    Page02,
    Page03,
    Chapter02,
    Page05,
    Page06,
    Chapter03,
    Page08
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TocPage,
    Chapter01,
    Page02,
    Page03,
    Chapter02,
    Page05,
    Page06,
    Chapter03,
    Page08
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
