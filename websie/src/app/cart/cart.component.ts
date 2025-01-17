import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartProducts!: any[];

  constructor(private cartService: CartService, private _router: Router) {
    // Call the service's method in the constructor or ngOnInit()
  }
  ngOnInit(): void {
    this.cartService.getCartItemsList().subscribe(data=>{
      this.cartProducts= data;
      console.log(data);
  //  this.cartProducts = this.cartService.getCartItemsList();
  })
  
  // this.cartService.clearCart().subscribe()
}
clearCart(): void {
  this.cartService.clearCart().subscribe(
    (response) => {
      console.log('Cart cleared successfully:', response);
      this.cartProducts = []; // Update the cartProducts array to reflect the cleared cart
    },
    (error) => {
      console.error('Error clearing cart:', error);
    }
  );
}
goToCheckout(): void{
  this._router.navigate(['/checkout'])
}
}
