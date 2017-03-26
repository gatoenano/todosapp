// Core modules
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
// App modules
import { List, ListItem } from '../../app/classes/index';
// App services
import { TodoList } from '../../providers/todo-list';

@Component({
  selector: 'page-list-details',
  templateUrl: 'list-details.html'
})
export class ListDetailsPage {

  list:List;
  listId:number;
  listItemName:string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private _todoList:TodoList) {
    this.list = this.navParams.get('list');
    this.listId = this.navParams.get('id');
  }
  // updates the list with new data
  updateList(item:ListItem) {
    item.finished = !item.finished;

    let allItemsDone = true;
    for (let item of this.list.items){
      if(!item.finished) {
        allItemsDone = false;
        break;
      }
    }

    this.list.finished = allItemsDone;
    this._todoList.updateData();
  }
  // confirmation modal appears when delete button is pressed
  deleteList() {
    let confirm = this.alertCtrl.create({
      title: 'Do you want to delete this list?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'OK',
          handler: () => {
            // removes the list
            this._todoList.removeList(this.listId);
            // returns to previous page
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
  // adds an item to the list
  addItem() {
    if(this.listItemName.length == 0) {
      return;
    }
    // creates a new item
    let item = new ListItem();
    item.name = this.listItemName;
    item.finished = true;
    // pushes the item to the list
    this.list.items.push(item);
    this.listItemName = "";
    this.updateList(item);
  }

}
