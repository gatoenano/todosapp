// Core modules
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// App modules
import { List, ListItem } from '../../app/classes/index';
// App services
import { TodoList } from '../../providers/todo-list';

// App component declaration
@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})

export class AddPage {

  listName:string = "";
  listItemName:string = "";

  items:Array<ListItem> = [];
  list:List;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    private _todoList:TodoList
  ) {}

  // Adds a new todo list
  addList() {
    if(this.listName.length == 0) {
      // shows an alert modal
      let alert = this.alertCtrl.create({
        title: 'List name missing',
        subTitle: 'A list name is mandatory!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    // creates a new list
    let list = new List(this.listName);
    list.items = this.items;
    // pushes the list to the todoList sevice
    this._todoList.addList(list);
    // closes the page
    this.navCtrl.pop();
  }

  // adds an item to the list
  addItem() {
    if(this.listItemName.length == 0) {
      return;
    }
    // creates a new item
    let item = new ListItem();
    item.name = this.listItemName;
    // pushes the item to the list
    this.items.push(item);
    this.listItemName = "";
  }

  // removes an item from a list
  removeItem(item:string, index:number) {
    // check if item exists
    let itemFound = this.items[index].name == item;
    // remove item if exists
    if(itemFound){
      this.confirmDeleteItem(index);
    }
  }
  // confirmation modal for delete item action
  confirmDeleteItem(index:number) {
    let confirm = this.alertCtrl.create({
      title: 'Do you want to delete this item?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'OK',
          handler: () => {
            this.items.splice(index, 1);
          }
        }
      ]
    });
    confirm.present();
  }
}
