import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LiquidsPage } from '../liquids/liquids';
import { InterchangeListPage } from '../interchange-list/interchange-list';

@IonicPage()
@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage {
    tab1Root = HomePage;
    tab2Root = LiquidsPage;
    tab3Root = InterchangeListPage;

    constructor(){
        
    }
}