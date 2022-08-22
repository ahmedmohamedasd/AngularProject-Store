import { CartService } from './../../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { product } from '../../Module/productII';
import { Router } from '@angular/router';
import { ItemDetailsService } from '../../services/item-details.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() itemList: product;
  CheckedList: product[] = [];
  flage: boolean = false;
  constructor(private route: Router, private serviceitem: ItemDetailsService, private serviceCart: CartService) {
    this.itemList = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url: '',
      quantity: 1
    }
  }
  AddtoCart(itemList: product, quantity: any) {

    this.CheckedList = this.serviceCart.cartList;
    for (let i = 0; i < this.CheckedList.length; i++) {
      if (this.CheckedList[i].id == itemList.id) {
        this.flage = true;
      }
    }
    if (this.flage == false) {
      itemList.quantity = quantity;
      this.serviceCart.cartList.push(itemList);
      alert("Item Successfully Added to Cart");
    } else {
      alert("Item Already Added!!!");
    }

  }
  ItemDetails(itemList: product) {
    this.serviceitem.itemDetail = itemList;
    this.route.navigate(['/itemdetail']);
  }
  ngOnInit(): void {
  }

}
