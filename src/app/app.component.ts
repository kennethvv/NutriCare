import { Component} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //@ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  constructor(platform: Platform, statusbar: StatusBar, splashScreen: SplashScreen){
    platform.ready().then(() => {
      statusbar.styleDefault();
      splashScreen.hide();
    });
  }
/*
    this.pages = [
      { title: 'Home', component: HomePage }
    ];
  }
*/
  openPage(page) {
    console.log(page);
  }

  logOut(){
    console.log("Cerrar Sesion");
  }
  
}
