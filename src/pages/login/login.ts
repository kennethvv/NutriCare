import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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

  constructor(private afauth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams
              ,public toastCtrl: ToastController ) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User){
    try{

      await this.afauth.auth.signInWithEmailAndPassword(user.email,user.password)
                            .then( _ => this.goToHome())
                            .catch( error => this.showToastFailedLogin(error.message));
    }
    catch(error){
      console.error(error); 
    }
  }

  goToHome(){
    this.navCtrl.push('TabsPage');
  }

  signup(){
    this.navCtrl.push('SignUpPage');
  }

  showToastFailedLogin(failedMessage:string){
    let toast = this.toastCtrl.create({
      message: "Attempt to Login Failed: " + failedMessage,
      duration: 5000,
      position: "top"
    });

    toast.present();
  }

}
