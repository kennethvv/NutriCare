import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//Firebase imports
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";


//Components
import { MyApp }      from './app.component';
import { LoginPage }  from '../pages/login/login'; 
import { HomePage } from '../pages/home/home';
import { LiquidsPage } from '../pages/liquids/liquids';
import { InterchangeListPage } from '../pages/interchange-list/interchange-list';
import { ReportsPage } from '../pages/reports/reports';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    LiquidsPage,
    InterchangeListPage,
    ReportsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    LiquidsPage,
    InterchangeListPage,
    ReportsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
