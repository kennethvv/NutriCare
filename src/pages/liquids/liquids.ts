import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Liquid } from '../../models/liquid';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the LiquidsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liquids',
  templateUrl: 'liquids.html',
})
export class LiquidsPage {

  liquid: Liquid = new Liquid("liquido",0);
  
    private dateOfLiquids: string;
    private currentUser = new User();
    private currentDateParse: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afauth: AngularFireAuth,
    private db: AngularFirestore) {
    this.dateOfLiquids = new Date().toLocaleDateString();
    this.currentDateParse = this.dateOfLiquids.replace(/\//g, "-");
    this.currentUser.userid = this.afauth.auth.currentUser.uid;
    this.getCurrentLiquid();
  }

  
 /* onLiquidChange(position) {
    if (this.meals[position].isActive) {
      this.meals[position].activatedTime = new Date().toLocaleTimeString();
      this.saveMealStatus(this.meals[position]);
    }
  }*/

  updateLiquid(){
    this.saveLiquidStatus(this.liquid);
  }

  saveLiquidStatus(l: Liquid) {
    console.log(l.liq);
    this.db.collection("users").doc(this.currentUser.userid).collection("diets").doc(this.currentDateParse).collection("liquid").doc(l.id).set({
      "liq": l.liq
    })
      .then( _ => _)
      .catch(error => console.log(error));
  }

  

  getCurrentLiquid() {
    const currentDietDate = this.db.collection("users").doc(this.currentUser.userid).collection("diets").doc(this.currentDateParse).collection("liquid");
    currentDietDate.ref.get().then(querySnapshot => {
      if(querySnapshot.docs.length > 0){
        querySnapshot.forEach(doc => {
          this.liquid = new Liquid("liquido",doc.data().liq);
    
        });
      }
      else{
        this.saveLiquidStatus(this.liquid);
      }
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LiquidsPage');
  }

}
