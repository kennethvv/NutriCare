import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public isBreakfastStatusChanged: boolean;
  public isMorningSnackStatusChanged: boolean;
  public isLunchStatusChanged: boolean;
  public isAfternoonSnackStatusChanged: boolean;
  public isDinnerStatusChanged: boolean;

  public breakfastTime: Date;
  public morningSnackTime: Date;
  public lunchTime: Date;
  public afternoonSnackTime: Date;
  public dinnerTime: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isBreakfastStatusChanged = false;
    this.isMorningSnackStatusChanged = false;
    this.isLunchStatusChanged = false;
    this.isAfternoonSnackStatusChanged = false;
    this.isDinnerStatusChanged = false;
  }

  onBreakfastStatusChange(){
    if(this.isBreakfastStatusChanged){
      this.breakfastTime = new Date();
    }
  }

  onMorningSnackStatusChange(){
    if(this.isMorningSnackStatusChanged){
      this.morningSnackTime = new Date();
    }
  }

  onLunchStatusChange(){
    if(this.isLunchStatusChanged){
      this.lunchTime = new Date();
    }
  }

  onAfternoonSnackStatusChange(){
    if(this.isAfternoonSnackStatusChanged){
      this.afternoonSnackTime = new Date();
    }
  }

  onDinnerStatusChange(){
    if(this.isDinnerStatusChanged){
      this.dinnerTime =  new Date ();
    }
  }
}
