import { Component, ViewChild} from '@angular/core';
import { Platform, Nav, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from "angularfire2/auth";
 
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  constructor(private afauth:AngularFireAuth, platform: Platform, statusbar: StatusBar, splashScreen: SplashScreen,private menu: MenuController){
    platform.ready().then(() => {
      statusbar.styleDefault();
      splashScreen.hide();
    });
  }

  openProfilePage() {
    this.menu.close();
    this.nav.push('ProfilePage');
  }

  logOut(){
    this.menu.close();
    this.afauth.auth.signOut().then(data => console.log(data)).then(_ => this.nav.popToRoot()).catch(error => console.log(error));
  }

  
  
}
