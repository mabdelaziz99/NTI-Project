import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http:HttpClient) { }

 apiPostURL = 'http://localhost:3000/order/create'
  createOrder(order: any):Observable<any>{
    // return this._http.post<any>(this.apiPostURL,{name: 'frogger'});
    //     console.log(product)
    //     this._http.post<any>(this.apiPostURL,product).pipe(
    //     tap(res=>{
    //     console.log(res)
    //   })
    console.log(order)
    return this._http.post<any>(this.apiPostURL, order)
    // return this._http.post(this.apiPostURL, product);
  }

  apiGetURL = 'http://localhost:3000/order/get'
  getOrder():Observable<any>{
    // this._http.get<any>(this.apiGetURL).pipe(tap(res=>{
    //   console.log(res);  
    // }));
    return this._http.get<any>(this.apiGetURL);
  }

}
