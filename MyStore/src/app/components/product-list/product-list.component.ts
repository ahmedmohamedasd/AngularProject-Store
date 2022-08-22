import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { product } from '../../Module/productII';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: product[] = [];
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((res: any) => {
      this.productList = res;
    })
  }

}
