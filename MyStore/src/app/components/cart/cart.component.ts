import { product } from './../../Module/productII';
import { cartModel } from './../../Module/cartmodel';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { confirmationModel } from '../../Module/confirmModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: cartModel[] = [];
  count: number = 0;
  grandTotal: number = 0;
  confirmData: confirmationModel;
  constructor(private serviceCart: CartService, private router: Router) {
    this.confirmData = {
      fullName: '',
      total: 0
    }

  }

  ngOnInit(): void {
    this.cartList = this.serviceCart.cartList;
    this.count = this.cartList.length;
    console.log(this.count);
    for (let i = 0; i < this.cartList.length; i++) {
      this.grandTotal += this.cartList[i].quantity * this.cartList[i].price;
    }
  }
  QuantityChangeFun(quantity: any, cartItem: product) {
    cartItem.quantity = quantity;
    let ItemIndex = this.cartList.findIndex(c => c.id == cartItem.id);
    this.cartList[ItemIndex] = cartItem;
    console.log(quantity);
    this.updateTotalAmount();
  }
  updateTotalAmount() {
    for (let i = 0; i < this.cartList.length; i++) {
      this.grandTotal += this.cartList[i].quantity * this.cartList[i].price;
    }
  }
  submitForm(f: any) {
    this.confirmData = {
      fullName: f.value.fullName,
      total: this.grandTotal
    }
    this.serviceCart.confirmData = this.confirmData;
    this.router.navigate(['/confirm']);
    this.serviceCart.cartList = [];
  }

}
