// Core modules
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// App modules
import { AddPage } from '../add/add';
import { ListDetailsPage } from '../list-details/list-details';
// App services
import { TodoList } from '../../providers/todo-list';

@Component({
  selector: 'page-finished',
  templateUrl: 'finished.html'
})
export class FinishedPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _todoList:TodoList
  ) {}

  // opens the add list page
  addList() {
    this.navCtrl.push(AddPage);
  }
  // loads the list page
  listDetails(list, id) {
    // goes to the page and sends the data of the list
    this.navCtrl.push(ListDetailsPage, {list, id});
  }

}
