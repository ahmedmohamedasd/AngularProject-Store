import { product } from './../Module/productII';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {

  itemDetail: product;
  constructor() {
    this.itemDetail = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url: '',
      quantity: 1
    }
  }
  setItemDetail() {
    return this.itemDetail;
  }
}
