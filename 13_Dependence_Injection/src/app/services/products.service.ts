import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    "PS-5","XBOX X","XBOX S","STEAM DECK"
  ];

  getProducts(){
    return this.products;
  }
}
