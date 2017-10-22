import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterchangeDetailsPage } from './interchange-details';

@NgModule({
  declarations: [
    InterchangeDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(InterchangeDetailsPage),
  ],
})
export class InterchangeDetailsPageModule {}
