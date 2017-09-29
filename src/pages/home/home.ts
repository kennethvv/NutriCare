import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Meal } from '../../models/meal';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  meals:Meal[] = [
    {name: "Breakfast", isActive:false},
    {name: "Morning Snack", isActive:false},
    {name: "Lunch", isActive:false},
    {name: "Afternoon Snack", isActive:false},
    {name: "Dinner", isActive:false}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  onMealChange(position){
    if(this.meals[position].isActive){
      this.meals[position].activatedTime = new Date();
    }
  }
}
