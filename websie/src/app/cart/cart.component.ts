import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartProducts: any;

  constructor(private cartService: CartService) {
    // Call the service's method in the constructor or ngOnInit()
    this.cartProducts = this.cartService.getCartItemsList();
  }
}
