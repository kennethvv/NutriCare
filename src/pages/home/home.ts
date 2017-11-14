import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Meal } from '../../models/meal';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore } from 'angularfire2/firestore';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  meals: Meal[] = []

  private dateOfMeals: string;
  private currentUser ={} as User;
  private currentDateParse: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afauth: AngularFireAuth,
    private db: AngularFirestore) {
    this.dateOfMeals = new Date().toLocaleDateString();
    this.currentDateParse = this.dateOfMeals.replace(/\//g, "-");
    this.currentUser.userid = this.afauth.auth.currentUser.uid;
    this.getCurrentDayMeals();
  }

  onMealChange(position) {
    if (this.meals[position].isActive) {
      this.meals[position].activatedTime = new Date().toLocaleTimeString();
      this.saveMealStatus(this.meals[position]);
    }
  }

  saveMealStatus(meal: Meal) {
    this.db.collection("users").doc(this.currentUser.userid).collection("diets").doc(this.currentDateParse).collection("meals").doc(meal.orderNbr).set({
      "name": meal.name,
      "isActive": meal.isActive,
      "activatedTime": meal.activatedTime
    })
      .then( _ => console.log(""))
      .catch(error => console.log(error));
  }

  getCurrentDayMeals() {
    const currentDietDate = this.db.collection("users").doc(this.currentUser.userid).collection("diets").doc(this.currentDateParse).collection("meals");
    currentDietDate.ref.get().then(querySnapshot => {
      if(querySnapshot.docs.length > 0){
        querySnapshot.forEach(doc => {
          this.meals.push(new Meal(doc.id,doc.data().name, doc.data().isActive, doc.data().activatedTime));
        });
      }
      else{
        this.saveDefaultMeals();
      }
    });
  }

  saveDefaultMeals(){
    this.meals.push(new Meal("1","Desayuno", false,"00:00:00"));
    this.meals.push(new Meal("2","Merienda Mañana",false,"00:00:00"));
    this.meals.push(new Meal("3","Almuerzo",false,"00:00:00"));
    this.meals.push(new Meal("4","Merienda Tarde",false,"00:00:00"));
    this.meals.push(new Meal("5","Cena",false,"00:00:00"));
    this.saveMealStatus(this.meals[0]);
    this.saveMealStatus(this.meals[1]);
    this.saveMealStatus(this.meals[2]);
    this.saveMealStatus(this.meals[3]);
    this.saveMealStatus(this.meals[4]);
  }

}
