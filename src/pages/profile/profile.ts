import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {AngularFirestore} from 'angularfire2/firestore';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

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

  user = {} as User;
  

  constructor(private afauth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams
    ,public toastCtrl: ToastController, public db:AngularFirestore, public alertCtrl:AlertController) {
    this.user.userid = this.afauth.auth.currentUser.uid;
    this.getCurrentUserData();
  }
 
  getCurrentUserData(){
    const currentUserDate = this.db.collection("users").doc(this.user.userid);
    currentUserDate.ref.get().then(doc => {
      if(doc.exists){
        this.user = doc.data();
      }
    }).catch(error => console.log(error));
  }

  updateUserProfile(){
    this.showConfirm(); 
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: '¿Desea actualizar su información personal?',
      message: 'Se actualizarán sus datos personales',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Actualizar',
          handler: () => {
            this.saveUserData();
          }
        }
      ]
    });
    confirm.present();
  }
  
  saveUserData(){
    this.db.collection("users").doc(this.user.userid).set(this.user)
    .then( _ => this.navCtrl.pop())
    .catch(error => console.log(error));   
  }
}
