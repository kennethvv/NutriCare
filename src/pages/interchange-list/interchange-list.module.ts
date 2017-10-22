import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterchangeListPage } from './interchange-list';

@NgModule({
  declarations: [
    InterchangeListPage,
  ],
  imports: [
    IonicPageModule.forChild(InterchangeListPage),
  ],
})
export class InterchangeListPageModule {}
