import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InterchangeListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interchange-list',
  templateUrl: 'interchange-list.html',
})
export class InterchangeListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterchangeListPage');
  }

  goToFruits(){
    this.navCtrl.push('InterchangeDetailsPage',{
      categoryPassed: "Fruits"
    });
  }

  goToFlours(){
    this.navCtrl.push('InterchangeDetailsPage',{
      categoryPassed: "Flours"
    });
  }

  goToMeats(){
    this.navCtrl.push('InterchangeDetailsPage',{
      categoryPassed: "Meats"
    });  
  }
  goToVegetables(){
    this.navCtrl.push('InterchangeDetailsPage',{
      categoryPassed: "Vegetables"
    });  
  }

  goToDairys(){
    this.navCtrl.push('InterchangeDetailsPage',{
      categoryPassed: "Dairys"
    });  
  }

  goToOils(){
    this.navCtrl.push('InterchangeDetailsPage',{
      categoryPassed: "Oils"
    });  
  }


}
