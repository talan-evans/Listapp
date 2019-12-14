import { Injectable } from '@angular/core';
import { List } from '../shared/list.model';

const LISTS: List[] = [
  {
    id: 0,
    title: "Groceries",
    items: [
      "coffee",
      "creamer",
      "sugar"
    ]
  }
]

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  getAllLists(): List[] {
    return LISTS;
  }

  getListById(id: number): List {
    return LISTS.find(l => l.id === id);
  }

  addItemToList(id: number, item: string) {
    let list = LISTS.find(l => l.id === id);
    list.items.push(item);
  }

  removeItemFromList(id: number, item: string) {
    let list = LISTS.find(l => l.id === id);
    list.items = list.items.filter(i => i !== item);
  }

  addList(newList: List) {
    newList.id = LISTS.length;
    LISTS.push(newList);
  }
}
