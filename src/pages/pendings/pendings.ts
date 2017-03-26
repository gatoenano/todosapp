// Core modules
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// App modules
import { AddPage } from '../add/add';
import { ListDetailsPage } from '../list-details/list-details';
// App services
import { TodoList } from '../../providers/todo-list';

@Component({
  selector: 'page-pendings',
  templateUrl: 'pendings.html'
})
export class PendingsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _todoList:TodoList
  ) {}

  // On init
  ionViewDidLoad() {}
  // opens the add list page
  addList() {
    this.navCtrl.push(AddPage);
  }
  // loads the list page
  listDetails(list, id) {
    // goes to the List Details page and sends the data of the list
    this.navCtrl.push(ListDetailsPage, {list, id});
  }
}
