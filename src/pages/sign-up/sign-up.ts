import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(private afauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async signUp(user: User){
    try{
      console.log(user.email);
      console.log(user.password);
      const result = await this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    }
    catch(error){
      console.error(error);
    }
  }

}
