import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";

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
              ,public toastCtrl: ToastController) {
  }

  async signUp(user: User){
    try{

      await this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password)
                            .then( _ => this.navCtrl.pop())
                            .catch(error => this.showToastFailedSignUp(error.message));
    }
    catch(error){
      console.error(error);
    }
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
