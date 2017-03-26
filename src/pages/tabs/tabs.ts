// Core modules
import { Component } from '@angular/core';
// App modules
import { PendingsPage } from '../pendings/pendings';
import { FinishedPage } from '../finished/finished';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PendingsPage;
  tab2Root: any = FinishedPage;

  constructor() {}
}
