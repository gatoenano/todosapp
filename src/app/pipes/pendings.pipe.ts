import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../classes/lists';

@Pipe({
  name: 'pendings',
  pure: false
})
export class PendingsPipe implements PipeTransform {
  transform(lists: List[], finished:boolean): List[] {
    let newList:List[] = [];
    for(let list of lists){
      // false means pending / true means finished
      if(list.finished == finished){
        newList.push(list);
      }
    }
    return newList;
  }
}
