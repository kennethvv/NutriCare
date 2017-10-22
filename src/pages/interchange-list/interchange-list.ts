import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Interchange } from '../../models/interchange';

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

  interchanges:Interchange[] = [
    {name: "Frutas", img_src: "img/apple.png"},
    {name: "Harinas", img_src: "img/bread.png"},
    {name: "Carnes/Proteinas", img_src:"img/egg.png"},
    {name: "Vegetales", img_src:"img/berenjena.png"},
    {name: "Lácteos", img_src:"img/milk.png"},
    {name: "Grasas", img_src: "img/butter.png"}
  ]

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
