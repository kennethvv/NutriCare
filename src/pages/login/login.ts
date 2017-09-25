import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  user = {} as User;

  constructor(private afauth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User){
    try{
      console.log(user.email);
      console.log(user.password);

      await this.afauth.auth.signInWithEmailAndPassword(user.email,user.password)
                            .then( response => this.successfullUser(response))
                            .then( _ => this.goToHome())
                            .catch( error => this.loginFailed(error));
    }
    catch(error){
      console.error(error); 
    }
  }

  loginFailed(error){
    console.log("Error: "+ error);
  }

  successfullUser(response){
    console.log("You log in successfully, it is a valid user");
    console.log(response);

  }

  goToHome(){
    this.navCtrl.push('HomePage');
  }

  signup(){
    this.navCtrl.push('SignUpPage');
  }

}
