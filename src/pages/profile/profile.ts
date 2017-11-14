import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {AngularFirestore} from 'angularfire2/firestore';
import { Profile } from '../../models/Profile';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  showToastFailedSignUp: any;

  profile ={} as Profile;
  
  private currentUser = new User();

  constructor(private afauth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams
    ,public toastCtrl: ToastController, public db:AngularFirestore) {
      this.currentUser.userid = this.afauth.auth.currentUser.uid;
      this.currentUser.email = this.afauth.auth.currentUser.email;
  }
 
  
  setProfile(profile: Profile){
    this.db.collection("users").doc(this.currentUser.userid).set({
      "nombre": profile.nombre,
      "apellido": profile.apellido,
      "peso": profile.peso,
      "estatura": profile.estatura,
      "edad": profile.edad,
      "genero": profile.genero,
      "uid": this.currentUser.userid,
      "email": this.currentUser.email
    })
    .then( _ => console.log(""))
    .catch(error => console.log(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
