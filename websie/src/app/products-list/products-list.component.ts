import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import {AuthService} from '../services/auth.service';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-products-list',
  standalone: false,
  
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  products!:any[];
 staticURL=''
constructor(private _productS:ProductsService, private _auth: AuthService, private _cart: CartService){
}
  ngOnInit(): void {
    this.staticURL = this._productS.staticFilesURL;
   this._productS.getProducts().subscribe(data=>{
    this.products= data;
    console.log(data)
   })
  }

  addToCart(product: any){
    this._cart.addToCart(product).subscribe(
      {
       next: ()=> {
       alert("item added to cart")
        },
        error:(err)=>console.log(err.message)
      }
    )
  
  }
  
  
}
