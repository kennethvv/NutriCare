import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LiquidsPage } from '../liquids/liquids';
import { InterchangeListPage } from '../interchange-list/interchange-list';
import { ReportsPage } from '../reports/reports';

@IonicPage()
@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage {
    tab1Root: any = HomePage;
    tab2Root: any = LiquidsPage;
    tab3Root: any = InterchangeListPage;
    tab4Root: any = ReportsPage;

    constructor(){

    }
}