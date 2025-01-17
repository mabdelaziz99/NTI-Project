import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit, OnDestroy {
  cartCount: number = 0;
  cartCountSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchCartCount();

    // Poll the cart count every 5 seconds
    this.cartCountSubscription = interval(500).subscribe(() => {
      this.fetchCartCount();
    });
  }

  fetchCartCount(): void {
    this.cartService.getCartItemsCount().subscribe(
      (count) => (this.cartCount = count),
      (error) => console.error('Error fetching cart count:', error)
    );
  }

  ngOnDestroy(): void {
    if (this.cartCountSubscription) {
      this.cartCountSubscription.unsubscribe(); // Cleanup subscription
    }
  }
}
