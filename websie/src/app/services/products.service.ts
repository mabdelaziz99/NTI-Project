import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }

  productURL='http://localhost:3000/product'
  staticFilesURL = 'http://localhost:3000/images/'
  getProducts():Observable<any>{
return this._http.get<any>(this.productURL);
  }
}
