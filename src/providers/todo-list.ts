// Core modules
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// App modules
import { List } from '../app/classes/lists';

@Injectable()
export class TodoList {

  lists:Array<List> = [];

  constructor(public http: Http) {
    this.loadData();
  }
  // updates the data on local storage
  updateData() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }
  // loads the data from local storage
  loadData() {
    if (localStorage.getItem('data')) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
  }
  // adds a list
  addList(list:List) {
    this.lists.push(list);
    this.updateData();
  }
  // removes a list
  removeList(listId:number) {
    this.lists.splice(listId, 1);
    this.updateData();
  }
}
