import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartCount: Number;

  constructor(private cartService: CartService) {
    // Call the service's method in the constructor or ngOnInit()
    this.cartCount = this.cartService.getCartItemsCount();
  }

  
}
