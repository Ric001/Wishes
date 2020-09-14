import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { Wishes } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {
  lists: Array<Wishes> = [];

  constructor() {
    this.add(new Wishes('Master The Angular Framework'));
    this.add(new Wishes('Master The Ionic Framework'));
    this.add(new Wishes('Master The Design Patterns'));
    this.add(new Wishes('Master The Object Analysis And Design'));
  }

  add(wishes: Wishes): void {
    this.lists.push(wishes);
  }
}
