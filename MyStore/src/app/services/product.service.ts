import { product } from './../Module/productII';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) {
  }
  getProducts(): Observable<product[]> {
    return this.http.get<product[]>("assets/data.json");
  }
}
