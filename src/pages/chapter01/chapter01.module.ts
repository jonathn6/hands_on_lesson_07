import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chapter01 } from './chapter01';

@NgModule({
  declarations: [
    Chapter01,
  ],
  imports: [
    IonicPageModule.forChild(Chapter01),
  ],
})
export class Chapter01Module {}
