import { cartModel } from './../Module/cartmodel';
import { Injectable } from '@angular/core';
import { confirmationModel } from '../Module/confirmModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: cartModel[] = [];
  quantity: number = 1;
  confirmData: confirmationModel;
  constructor() {
    this.confirmData = {
      fullName: '',
      total: 0
    }
  }
}
