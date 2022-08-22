import { CartService } from './../../services/cart.service';
import { product } from './../../Module/productII';
import { Component, OnInit, Input } from '@angular/core';
import { ItemDetailsService } from '../../services/item-details.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  @Input() itemDetail: product;
  CheckedList: product[] = [];
  flage: boolean = false;
  constructor(private serviceItem: ItemDetailsService, private serviceCart: CartService) {
    this.itemDetail = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url: '',
      quantity: 1
    }
  }

  ngOnInit(): void {
    this.itemDetail = this.serviceItem.setItemDetail();
  }

  AddtoCart(itemDetail: product, quantity: any) {

    this.CheckedList = this.serviceCart.cartList;
    for (let i = 0; i < this.CheckedList.length; i++) {
      if (this.CheckedList[i].id == itemDetail.id) {
        this.flage = true;
      }
    }
    if (this.flage == false) {
      itemDetail.quantity = quantity;
      this.serviceCart.cartList.push(itemDetail);
      alert("Item Successfully Added to Cart");
    } else {
      alert("Item Already Added!!!");
    }
  }
}
