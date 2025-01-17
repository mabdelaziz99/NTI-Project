import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  // products = [
  //   { id: '1', name: 'Product A', price: 100, stock: 10, imgURL:'sgsw' },
  //   { id: '2', name: 'Product B', price: 200, stock: 5 }
  // ]

  constructor(private _http:HttpClient) { }

  apiGetCountURL = 'http://localhost:3000/cart/getCount'
  getCartItemsCount():Observable<any>{
    return this._http.get<any>(this.apiGetCountURL)
  }
  apiGetURL = 'http://localhost:3000/cart/get'
  getCartItemsList():Observable<any>{
    // this._http.get<any>(this.apiGetURL).pipe(tap(res=>{
    //   console.log(res);  
    // }));
    return this._http.get<any>(this.apiGetURL);
  }
  apiPostURL = 'http://localhost:3000/cart/add'
  addToCart(product: any):Observable<any>{
    // return this._http.post<any>(this.apiPostURL,{name: 'frogger'});
    //     console.log(product)
    //     this._http.post<any>(this.apiPostURL,product).pipe(
    //     tap(res=>{
    //     console.log(res)
    //   })
    console.log(product)
    return this._http.post<any>(this.apiPostURL, {"name" :product.name , "price" : product.price , "product_id" : product._id})
    // return this._http.post(this.apiPostURL, product);
  }
  apiDeleteURL = 'http://localhost:3000/cart/deleteAll'
  clearCart():Observable<any>{
  return this._http.delete<any>(this.apiDeleteURL)
  }

  apiRemoveURL = 'http://localhost:3000/cart/remove'
  removeCartItem(product: any):Observable<any>{
  return this._http.delete<any>(this.apiRemoveURL, product)
  }
}
