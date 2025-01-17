import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: false,
  
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  orderProducts!: any[];
  orderSum:any;

  constructor(private cartService: CartService, private _router: Router, private orderService: OrderService) {
    // Call the service's method in the constructor or ngOnInit()
  }
  ngOnInit(): void {
    this.cartService.getCartItemsList().subscribe(data=>{
      this.orderProducts= data;
      this.orderSum= 0;

     data.forEach((item: any) => {
      this.orderSum += item.price;
    });
      console.log(data);
  })
  }

  createOrder(myForm: NgForm){
    console.log(myForm.value);
    myForm.value.product_id=this.orderProducts
    this.orderService.createOrder(myForm.value).subscribe(
      {
       next: ()=> {
       alert("Order Placed Successfully")
        },
        error:(err)=>console.log(err.message)
      }
    )
  
  }

}
