import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiquidsPage } from './liquids';

@NgModule({
  declarations: [
    LiquidsPage,
  ],
  imports: [
    IonicPageModule.forChild(LiquidsPage),
  ],
})
export class LiquidsPageModule {}
