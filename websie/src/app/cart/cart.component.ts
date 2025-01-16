import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartProducts!: any[];

  constructor(private cartService: CartService) {
    // Call the service's method in the constructor or ngOnInit()
  }
  ngOnInit(): void {
    this.cartService.getCartItemsList().subscribe(data=>{
      this.cartProducts= data;
      console.log(data);
      
  //  this.cartProducts = this.cartService.getCartItemsList();
  })
 
}}
