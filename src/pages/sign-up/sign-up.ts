import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {AngularFirestore} from 'angularfire2/firestore';

import { User } from '../../models/User';

/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user = {} as User;

  constructor(private afauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams
              ,public toastCtrl: ToastController, public db:AngularFirestore) {
  }

  async signUp(user: User){
    try{

      await this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password)                 
                            .then(result => this.insertUser(result,user))
                            .then( _ => this.clearFields())
                            .then( _ => this.navCtrl.pop())
                            .catch(error => this.showToastFailedSignUp(error.message));
    }
    catch(error){
      console.error(error);
    }
  }

  clearFields(){
    this.user.email = "";
    this.user.password = "";
  }

  insertUser(result,user){
    //console.log(result.uid);
    this.db.collection("users").doc(result.uid).set({
      "email": user.email,
      "userid": result.uid 
    })
    .catch(error => this.showToastFailedSignUp(error.message));
  }
  showToastFailedSignUp(failedMessage:string){
    let toast = this.toastCtrl.create({
      message: "Attempt to SignUp Failed: " + failedMessage,
      duration: 5000,
      position: "top"
    });

    toast.present();
  }

}
