import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {AngularFirestore} from 'angularfire2/firestore';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


import { User } from './../../models/user';
import { Meal } from './../../models/meal';
import { Liquid } from '../../models/liquid';
/**
 * Generated class for the ReportsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {
  private currentUser = {} as User;
  meals: Meal[] = []
  liquids: Liquid[] = []
 
  private currentDateParse: string;
  private CurrentDate: string;
  

  constructor(private afauth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams
    ,public toastCtrl: ToastController, public db:AngularFirestore, public alertCtrl:AlertController) {
      this.currentUser.userid = this.afauth.auth.currentUser.uid;
      this.CurrentDate= new Date().toLocaleDateString();
    this.currentDateParse = this.CurrentDate.replace(/\//g, "-");


     
    this.getMeals();
    this.getLiquids();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
  }

  getReport(date1,date2){

  }

  getMeals(){
    const currentDietDate = this.db.collection("users").doc(this.currentUser.userid).collection("diets").doc(this.currentDateParse).collection("meals");
    currentDietDate.ref.get().then(querySnapshot => {
      if(querySnapshot.docs.length > 0){
        querySnapshot.forEach(doc => {
          this.meals.push(new Meal(doc.id,doc.data().name, doc.data().isActive, doc.data().activatedTime));
        });
      } 
  });

  }
  getLiquids(){
    const currentDietDate = this.db.collection("users").doc(this.currentUser.userid).collection("diets").doc(this.currentDateParse).collection("liquid");
    currentDietDate.ref.get().then(querySnapshot => {
      if(querySnapshot.docs.length > 0){
        querySnapshot.forEach(doc => {
          this.liquids.push(new Liquid(doc.data().id, doc.data().liq));
        });
      } 
  });

  }


  

}
