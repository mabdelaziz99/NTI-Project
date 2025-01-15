import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products = [
    { id: '1', name: 'Product A', price: 100, stock: 10, imgURL:'sgsw' },
    { id: '2', name: 'Product B', price: 200, stock: 5 }
  ]

  constructor() {
    
   }
   getCartItemsCount(){
    return 5
  }
  getCartItemsList(){
    return this.products
  }
}
