import { confirmationModel } from './../../Module/confirmModel';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  dataConfirmed: confirmationModel
  constructor(private serviceCart: CartService) {
    this.dataConfirmed = this.serviceCart.confirmData;
  }

  ngOnInit(): void {
  }


}
